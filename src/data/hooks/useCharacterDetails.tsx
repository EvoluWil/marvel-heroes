import React, { createContext, useContext, useEffect, useState } from "react";

import { CharacterDataTypes, CharacterTypes } from "data/@types/Character";
import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { useRouter } from "next/dist/client/router";
import { CharacterDetailContextTypes } from "data/@types/CharacterContext";
import { ComicTypes } from "data/@types/Comic";

const CharacterDetailContext = createContext({} as CharacterDetailContextTypes);

export const CharacterDetailProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [character, setCharacter] = useState<CharacterTypes | null>(null);
  const [participations, setparticipations] = useState<ComicTypes[]>([]);
  const { query } = useRouter();

  const getData = async () => {
    const charId = Number(query.characterId);

    const { data } = await api.get<CharacterDataTypes>(
      `/characters?id=${charId}`
    );
    setCharacter(data.data.results[0]);
  };

  const getParticipations = async (type: string = "comics") => {
    const charId = Number(query.characterId);
    const { data } = await api.get<any>(`/characters/${charId}/${type}`);
    setparticipations(data.data.results);
  };

  return (
    <CharacterDetailContext.Provider
      value={{
        getData,
        character,
        participations,
        getParticipations,
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
