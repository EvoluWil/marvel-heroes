import { SerieTypes } from "./Serie";
import { ParticipationCardProps } from "./Participation";

export interface SerieContextTypes {
  series: SerieTypes[];
  getData: () => void;
  page: number;
  setPage(value: number): void;
  count: number;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

export interface SerieDetailContextTypes {
  serie: SerieTypes;
  getData: () => void;
}
