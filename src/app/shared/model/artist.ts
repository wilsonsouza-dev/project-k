import { ExternalUrl } from './external-url';
import { Image } from './image';
import { Track } from './track';

export interface Artist {
  id: string;
  name: string;
  genres: string[];
  images: Image[];
  track: Track;
  popularity: number;
  external_urls: ExternalUrl;
}
