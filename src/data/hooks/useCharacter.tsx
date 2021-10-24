import React, { createContext, useContext, useEffect, useState } from "react";

import { CharacterDataTypes, CharacterTypes } from "data/@types/Character";
import { CharacterContextTypes } from "data/@types/CharacterContext";
import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";

const CharacterContext = createContext({} as CharacterContextTypes);

export const CharacterProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [characters, setCharacter] = useState<CharacterTypes[]>([]);

  const getData = async (page?: number) => {
    const { data } = await api.get<CharacterDataTypes>("/characters");
    setCharacter(data.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CharacterContext.Provider value={{ getData, characters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  return context;
};
