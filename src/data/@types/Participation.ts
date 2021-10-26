import { CreatorTypes } from "./Creator";
import { RedirectTypes } from "./Redirect";
import { ThumbnailTypes } from "./Thumbnail";

export interface ParticipationCardProps {
  onClick?: () => void;
  id: number;
  title?: string;
  name?: string;
  thumbnail: ThumbnailTypes;
  resourceURI?: string;
}

export interface ParticipationDataTypes {
  data: {
    total: number;
    limit: 20;
    offset: 0;
    results: ParticipationCardProps[];
  };
}
