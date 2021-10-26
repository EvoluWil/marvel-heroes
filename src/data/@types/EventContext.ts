import { EventTypes } from "./Event";
import { ParticipationCardProps } from "./Participation";

export interface EventContextTypes {
  events: EventTypes[];
  getData: () => void;
  page: number;
  setPage(value: number): void;
  count: number;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

export interface EventDetailContextTypes {
  event: EventTypes;
  getData: () => void;
}
