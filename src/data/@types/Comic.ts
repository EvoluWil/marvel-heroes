import { CreatorTypes } from "./Creator";
import { RedirectTypes } from "./Redirect";
import { SerieTypes } from "./Serie";
import { ThumbnailTypes } from "./Thumbnail";
import { UrlTypes } from "./Url";

export interface ComicTypes {
  id: number;
  title: string;
  variantDescription: string;
  description: string;
  pageCount: number;
  thumbnail: ThumbnailTypes;
  urls: UrlTypes[];

  prices: [{ price: number }];

  creators: {
    available: number;
    items: CreatorTypes[];
  };

  characters: {
    available: number;
    collectionURI: string;
    items: RedirectTypes[];
  };

  series: RedirectTypes;
  events: {
    available: number;
    collectionURI: string;
    items: RedirectTypes[];
  };
}

export interface ComicDataTypes {
  data: {
    total: number;
    limit: 20;
    offset: 0;
    results: ComicTypes[];
  };
}

export interface ComicCardProps {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  thumbnail: ThumbnailTypes;

  prices: [{ price: number }];

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
