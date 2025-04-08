import { Member } from "./member";

export interface ArtistResume {
    id?: string;
    spotify?: string;
    name?: string;
    debut?: string;
    disband?: string;
    label?: string;
    members: Member[];
    biography?: string;
    genre?: string;
    fandom?: string;
  }
  