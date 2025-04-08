import { Image } from '../image';

export interface Snippet {
  publishedAt: String;
  channelId: String;
  title: String;
  description: String;
  thumbnails: Image;
  channelTitle: String;
}
