import { Injectable } from '@angular/core';
import { ArtistApiService } from '../api/spotify/artist-api.service';
import { options } from '../data/options';
import { Artist } from '../model/artist';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private apiService: ArtistApiService) {}

  // Return a random artist
  getRandomArtist(): Observable<Artist> {
    const artist = options[Math.floor(Math.random() * options.length)];
    return this.apiService.getArtistById(artist.id);
  }

  // Return a random artist ID
  getRandomUniqueIdsArtist(count: number): string[] {
    const shuffled = [...options].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map((item) => item.id);
  }

  // Return all artists IDs
  getAllArtistsIds(): string[] {
    return options.map((item) => item.id);
  }
}
