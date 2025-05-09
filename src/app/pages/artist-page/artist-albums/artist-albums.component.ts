import { Component, Input, input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AlbumDialogComponent } from '../../../shared/components/album-dialog/album-dialog.component';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';
import { CommonModule } from '@angular/common';
import { Album } from '../../../shared/model/album';
import { AlbumDialogService } from '../../../shared/components/album-dialog/album-dialog.service';
import { ArtistApiService } from '../../../shared/api/spotify/artist-api.service';

@Component({
  selector: 'app-artist-albums',
  imports: [
    SharedModule,
    CommonModule,
    AlbumDialogComponent,
    StandardButtonComponent,
  ],
  templateUrl: './artist-albums.component.html',
  styleUrl: './artist-albums.component.css',
})
export class ArtistAlbumsComponent {
  constructor(
    private albumDialogService: AlbumDialogService,
    private artistApiService: ArtistApiService
  ) {}

  responsiveOptions: any[] = [
    {
      breakpoint: '3840px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '1024px', // Tamanho de tela para tablets
      numVisible: 3,
      numScroll: 2,
    },
    {
      breakpoint: '768px', // Tamanho de tela para dispositivos móveis grandes (iPad, etc.)
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '640px', // Tamanho de tela para smartphones
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnChanges() {
    this.getArtistAlbums();
  }

  @Input() id!: string;
  albums!: Album[];

  // Get all albums from the artist
  getArtistAlbums() {
    this.artistApiService.getAlbumsByArtist(this.id).subscribe((albums) => {
      this.albums = albums.sort((a, b) => {
        return a.release_date > b.release_date ? -1 : 1;
      });
    });
  }

  // Open the album dialog
  openAlbumDialog(album: Album): void {
    this.albumDialogService.showAlbum(album);
  }

  // Open the spotify url
  openSpotify(url: URL): void {
    window.open(url, '_blank');
  }
}
