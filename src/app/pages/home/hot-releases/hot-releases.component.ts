import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistApiService } from '../../../shared/api/spotify/artist-api.service';
import { Track } from '../../../shared/model/track';
import { ArtistService } from '../../../shared/services/artist.service';
import { SharedModule } from '../../../shared/shared.module';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';

@Component({
  selector: 'app-hot-releases',
  imports: [SharedModule, CommonModule, StandardButtonComponent],
  templateUrl: './hot-releases.component.html',
  styleUrl: './hot-releases.component.css',
})
export class HotReleasesComponent {
  ids: string[] = [];
  tracks: Track[] = [];
  isTracksLoaded = false;

  constructor(
    private artistService: ArtistService,
    private artistApiService: ArtistApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHighlightedTracks();
  }

  private getHighlightedTracks(): void {
    console.log('🔹 Buscando álbuns em destaque...');
    const ids = this.artistService.getRandomUniqueIdsArtist(5);

    this.artistApiService.getNewestAlbumBySeveralArtist(ids).subscribe({
      next: (tracks) => {
        this.tracks = tracks;
        this.isTracksLoaded = true;
      },
      error: (err) => console.error('Erro ao buscar destaques:', err),
    });
  }

  openSpotify(url: URL): void {
    window.open(url, '_blank');
  }

  goToArtistProfile(artistId: string): void {
    this.router.navigate(['artist', artistId]);
  }
}
