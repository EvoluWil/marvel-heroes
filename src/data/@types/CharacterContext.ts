import { CharacterTypes } from "./Character";

export interface CharacterContextTypes {
  characters: CharacterTypes[];
  getData: () => void;
}
