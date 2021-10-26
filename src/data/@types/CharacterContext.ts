import { CharacterTypes } from "./Character";
import { ComicTypes } from "./Comic";
import { ParticipationCardProps } from "./Participation";

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
  participations: ParticipationCardProps[];
  getParticipations: (type?: string) => void;
  page: number;
  setPage(value: number): void;
  count: number;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}
