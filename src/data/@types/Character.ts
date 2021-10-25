import { RedirectTypes } from "./Redirect";
import { ThumbnailTypes } from "./Thumbnail";
import { UrlTypes } from "./Url";

export interface CharacterTypes {
  id: number;
  name: string;
  modified: string;
  description: string;
  thumbnail: ThumbnailTypes;
  urls?: UrlTypes[];

  comics: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };

  series: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };

  stories: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };

  events: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };
}

export interface CharacterDataTypes {
  data: {
    total: number;
    limit: 20;
    offset: 0;
    results: CharacterTypes[];
  };
}

export interface CharacterCardProps {
  id: number;
  name: string;
  description?: string;
  modified?: string;
  thumbnail: ThumbnailTypes;
  urls?: UrlTypes[];

  comics: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };

  series: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };

  stories: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };

  events: {
    available: number;
    collectionURI: string;
    items?: RedirectTypes;
  };

  onClick?: () => void;
}
