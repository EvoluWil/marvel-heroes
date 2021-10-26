import React, { createContext, useContext, useState } from "react";

import { CharacterDataTypes, CharacterTypes } from "data/@types/Character";
import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { useRouter } from "next/dist/client/router";
import { CharacterDetailContextTypes } from "data/@types/CharacterContext";
import {
  ParticipationCardProps,
  ParticipationDataTypes,
} from "data/@types/Participation";

const CharacterDetailContext = createContext({} as CharacterDetailContextTypes);

export const CharacterDetailProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const [character, setCharacter] = useState<CharacterTypes | null>(null);
  const [participations, setparticipations] = useState<
    ParticipationCardProps[]
  >([]);
  const route = useRouter();

  const getData = async () => {
    try {
      const charId = Number(route.query.characterId);
      const { data } = await api.get<CharacterDataTypes>(
        `/characters?id=${charId}`
      );
      setCharacter(data.data.results[0]);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  const getParticipations = async (type: string = "comics") => {
    try {
      const charId = Number(route.query.characterId);
      let offset = page * itemsPerPage;
      const { data } = await api.get<ParticipationDataTypes>(
        `/characters/${charId}/${type}?offset=${offset}&limit=${itemsPerPage}`
      );
      setCount(data.data.total);
      setparticipations(data.data.results);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <CharacterDetailContext.Provider
      value={{
        getData,
        character,
        participations,
        getParticipations,
        count,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </CharacterDetailContext.Provider>
  );
};

export const useCharacterDetail = () => {
  const context = useContext(CharacterDetailContext);
  return context;
};
