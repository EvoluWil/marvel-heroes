import React, { createContext, useContext, useState } from "react";

import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { useRouter } from "next/dist/client/router";
import { SerieDataTypes, SerieTypes } from "data/@types/Serie";
import { SerieDetailContextTypes } from "data/@types/SerieContext";

const SerieDetailContext = createContext({} as SerieDetailContextTypes);

export const SerieDetailProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [serie, setSerieDetail] = useState<SerieTypes | null>(null);
  const route = useRouter();

  const getData = async () => {
    try {
      const charId = Number(route.query.serieId);
      const { data } = await api.get<SerieDataTypes>(`/series?id=${charId}`);
      setSerieDetail(data.data.results[0]);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <SerieDetailContext.Provider
      value={{
        getData,
        serie,
      }}
    >
      {children}
    </SerieDetailContext.Provider>
  );
};

export const useSerieDetail = () => {
  const context = useContext(SerieDetailContext);
  return context;
};
