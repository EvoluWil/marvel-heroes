import { CharacterTypes } from "./Character";
import { ComicTypes } from "./Comic";

export interface CharacterContextTypes {
  characters: CharacterTypes[];
  getData: () => void;
  page: number;
  setPage(value: number): void;
  count: number;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

export interface CharacterDetailContextTypes {
  character: CharacterTypes;
  getData: () => void;
  participations: ComicTypes[];
  getParticipations: (type?: string) => void;
}
