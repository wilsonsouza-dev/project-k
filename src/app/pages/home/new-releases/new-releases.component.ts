import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArtistApiService } from '../../../shared/api/spotify/artist-api.service';
import { AlbumDialogComponent } from '../../../shared/components/album-dialog/album-dialog.component';
import { AlbumDialogService } from '../../../shared/components/album-dialog/album-dialog.service';
import { Album } from '../../../shared/model/album';
import { ArtistService } from '../../../shared/services/artist.service';
import { CacheService } from '../../../shared/services/cache.service';
import { SharedModule } from '../../../shared/shared.module';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';

@Component({
  selector: 'app-new-releases',
  imports: [
    SharedModule,
    CommonModule,
    AlbumDialogComponent,
    StandardButtonComponent,
  ],
  templateUrl: './new-releases.component.html',
  styleUrl: './new-releases.component.css',
})
export class NewReleasesComponent implements OnInit {
  ids: string[] = [];
  newReleases: Album[] = [];
  isNewReleasesLoaded = false;
  private readonly cacheKey = 'newReleasesCache';

  constructor(
    private artistService: ArtistService,
    private artistApiService: ArtistApiService,
    private cacheService: CacheService,
    private albumDialogService: AlbumDialogService
  ) {}

  ngOnInit(): void {
    this.ids = this.artistService.getAllArtistsIds();
    this.getNewReleases();
  }

  private getNewReleases(): void {
    const cachedData = this.cacheService.get<Album[]>(this.cacheKey);

    if (cachedData) {
      console.log('✅ Cache HIT:', cachedData);
      this.newReleases = cachedData;
      this.isNewReleasesLoaded = true;
      return;
    }

    this.artistApiService.getNewReleases(this.ids).subscribe({
      next: (data) => {
        this.newReleases = data;
        this.isNewReleasesLoaded = true;
        this.cacheService.set(this.cacheKey, data);
        console.log('❌ Cache MISS - Nova Requisição:', data);
      },
      error: (err) => console.error('Erro ao buscar new releases:', err),
    });
  }

  openAlbumDialog(album: Album): void {
    this.albumDialogService.showAlbum(album);
  }

  openSpotify(url: URL): void {
    window.open(url, '_blank');
  }
}
