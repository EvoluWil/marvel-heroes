import { ComicTypes } from "./Comic";
import { ParticipationCardProps } from "./Participation";

export interface ComicContextTypes {
  comics: ComicTypes[];
  getData: () => void;
  page: number;
  setPage(value: number): void;
  count: number;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

export interface ComicDetailContextTypes {
  comic: ComicTypes;
  getData: () => void;
}
