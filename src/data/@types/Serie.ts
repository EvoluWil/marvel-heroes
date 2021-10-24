import { CreatorTypes } from "./Creator";
import { RedirectTypes } from "./Redirect";
import { ThumbnailTypes } from "./Thumbnail";
import { UrlTypes } from "./Url";

export interface SerieTypes {
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailTypes;
  urls: UrlTypes[];
  startYear: number;
  endYear: number;

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

  events: {
    available: number;
    collectionURI: string;
    items: RedirectTypes;
  };
}
