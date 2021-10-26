import React, { createContext, useContext, useState } from "react";

import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { SerieContextTypes } from "data/@types/SerieContext";
import { SerieDataTypes, SerieTypes } from "data/@types/Serie";
import { useRouter } from "next/dist/client/router";

const SerieContext = createContext({} as SerieContextTypes);

export const SerieProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [series, setSeries] = useState<SerieTypes[]>([]);
  const route = useRouter();

  const getData = async () => {
    try {
      let offset = page * itemsPerPage;
      const { data } = await api.get<SerieDataTypes>(
        `/series?offset=${offset}&limit=${itemsPerPage}`
      );
      setCount(data.data.total);
      setSeries(data.data.results);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <SerieContext.Provider
      value={{
        getData,
        series,
        count,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </SerieContext.Provider>
  );
};

export const useSerie = () => {
  const context = useContext(SerieContext);
  return context;
};
