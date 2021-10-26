import React, { createContext, useContext, useState } from "react";

import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { EventContextTypes } from "data/@types/EventContext";
import { EventDataTypes, EventTypes } from "data/@types/Event";
import { useRouter } from "next/dist/client/router";

const EventContext = createContext({} as EventContextTypes);

export const EventProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [events, setEvents] = useState<EventTypes[]>([]);
  const route = useRouter();

  const getData = async () => {
    try {
      let offset = page * itemsPerPage;
      const { data } = await api.get<EventDataTypes>(
        `/events?offset=${offset}&limit=${itemsPerPage}`
      );
      setCount(data.data.total);
      setEvents(data.data.results);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <EventContext.Provider
      value={{
        getData,
        events,
        count,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  return context;
};
