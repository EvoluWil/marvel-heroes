import React, { createContext, useContext, useState } from "react";

import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { useRouter } from "next/dist/client/router";
import { ComicDataTypes, ComicTypes } from "data/@types/Comic";
import { ComicDetailContextTypes } from "data/@types/ComicContext";

const ComicDetailContext = createContext({} as ComicDetailContextTypes);

export const ComicDetailProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [comic, setComicDetail] = useState<ComicTypes | null>(null);
  const route = useRouter();

  const getData = async () => {
    try {
      const charId = Number(route.query.comicId);
      const { data } = await api.get<ComicDataTypes>(`/comics?id=${charId}`);
      setComicDetail(data.data.results[0]);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <ComicDetailContext.Provider
      value={{
        getData,
        comic,
      }}
    >
      {children}
    </ComicDetailContext.Provider>
  );
};

export const useComicDetail = () => {
  const context = useContext(ComicDetailContext);
  return context;
};
