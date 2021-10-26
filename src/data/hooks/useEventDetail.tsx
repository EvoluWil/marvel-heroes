import React, { createContext, useContext, useState } from "react";

import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { useRouter } from "next/dist/client/router";
import { EventDataTypes, EventTypes } from "data/@types/Event";
import { EventDetailContextTypes } from "data/@types/EventContext";

const EventDetailContext = createContext({} as EventDetailContextTypes);

export const EventDetailProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [event, setEventDetail] = useState<EventTypes | null>(null);
  const route = useRouter();

  const getData = async () => {
    try {
      const charId = Number(route.query.eventId);
      const { data } = await api.get<EventDataTypes>(`/events?id=${charId}`);
      setEventDetail(data.data.results[0]);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <EventDetailContext.Provider
      value={{
        getData,
        event,
      }}
    >
      {children}
    </EventDetailContext.Provider>
  );
};

export const useEventDetail = () => {
  const context = useContext(EventDetailContext);
  return context;
};
