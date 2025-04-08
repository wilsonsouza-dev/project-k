import { ExternalUrl } from './external-url';
import { Image } from './image';

export interface User {
  id: string;
  display_name: string;
  external_urls: ExternalUrl;
  images: Image[];
  product: string;
  type: string;
}
