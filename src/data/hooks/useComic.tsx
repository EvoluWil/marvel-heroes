import React, { createContext, useContext, useState } from "react";

import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { ComicContextTypes } from "data/@types/ComicContext";
import { ComicDataTypes, ComicTypes } from "data/@types/Comic";
import { useRouter } from "next/dist/client/router";

const ComicContext = createContext({} as ComicContextTypes);

export const ComicProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [comics, setComics] = useState<ComicTypes[]>([]);
  const route = useRouter();

  const getData = async () => {
    try {
      let offset = page * itemsPerPage;
      const { data } = await api.get<ComicDataTypes>(
        `/comics?offset=${offset}&limit=${itemsPerPage}`
      );
      setCount(data.data.total);
      setComics(data.data.results);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <ComicContext.Provider
      value={{
        getData,
        comics,
        count,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
};

export const useComic = () => {
  const context = useContext(ComicContext);
  return context;
};
