import { ExternalUrl } from './external-url';
import { Artist } from './artist';
import { Album } from './album';

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
  external_urls: ExternalUrl;
  track_number: number;
  duration_ms: number;
  explicit: boolean;
  popularity: number;
}
