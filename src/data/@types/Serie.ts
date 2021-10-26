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
    items: RedirectTypes[];
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

export interface SerieDataTypes {
  data: {
    total: number;
    limit: 20;
    offset: 0;
    results: SerieTypes[];
  };
}

export interface SerieCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailTypes;

  creators: {
    available: number;
    items: CreatorTypes[];
  };

  characters: {
    available: number;
    collectionURI: string;
    items: RedirectTypes[];
  };
}
