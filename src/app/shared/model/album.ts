import { Image } from './image';
import { ExternalUrl } from './external-url';
import { Artist } from './artist';

export interface Album {
    id: string;
    name: string;
    images: Image[];
    release_date: string;
    external_urls: ExternalUrl;
    artists: Artist[];
    total_tracks: number;
}