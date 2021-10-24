import { CreatorTypes } from "./Creator";
import { RedirectTypes } from "./Redirect";
import { ThumbnailTypes } from "./Thumbnail";

export interface EventTypes {
  id: number;
  title: string;
  description: string;
  type: string;
  thumbnail: ThumbnailTypes;

  creators: {
    available: number;
    items: CreatorTypes[];
  };

  characters: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };

  series: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };

  events: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };

  comics: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };
}
