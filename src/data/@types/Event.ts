import { CreatorTypes } from "./Creator";
import { RedirectTypes } from "./Redirect";
import { ThumbnailTypes } from "./Thumbnail";
import { UrlTypes } from "./Url";

export interface EventTypes {
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailTypes;
  start: string;
  end: string;
  urls: UrlTypes[];

  creators: {
    available: number;
    items: CreatorTypes[];
  };

  next: {
    resourceURI: string;
    name: string;
  };

  previous: {
    resourceURI: string;
    name: string;
  };

  characters: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };

  stories: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };

  comics: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };

  series: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };
}
