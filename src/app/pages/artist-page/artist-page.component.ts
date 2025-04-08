import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistApiService } from '../../shared/api/spotify/artist-api.service';
import { AlbumDialogComponent } from '../../shared/components/album-dialog/album-dialog.component';
import { AlbumDialogService } from '../../shared/components/album-dialog/album-dialog.service';
import { StandardButtonComponent } from "../../shared/components/standard-button/standard-button.component";
import { Album } from '../../shared/model/album';
import { Artist } from '../../shared/model/artist';
import { ArtistResume } from '../../shared/model/artistResume';
import { SharedModule } from '../../shared/shared.module';
import { ArtistVideosComponent } from "./artist-videos/artist-videos.component";

@Component({
  selector: 'app-artist-page',
  imports: [SharedModule, CommonModule, AlbumDialogComponent, StandardButtonComponent, ArtistVideosComponent],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.css',
})
export class ArtistPageComponent implements OnInit {
  constructor(
    private artistApiService: ArtistApiService,
    private route: ActivatedRoute,
    private albumDialogService: AlbumDialogService
  ) {}

  id!: string;
  artist!: Artist;
  artistResume: ArtistResume = {} as ArtistResume;
  albums!: Album[];
  loading: boolean = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.loadData();
    });
  }

  // Load all data
  loadData() {
    this.getArtistById();
    this.getArtistResume();
    this.getArtistAlbums();
    this.loading = false;
  }

  // Get the artist by ID
  getArtistById() {
    this.artistApiService.getArtistById(this.id).subscribe((artist) => {
      this.artist = artist;
    });
  }

  // Get the artist resume
  getArtistResume() {
    this.artistApiService
      .getArtistResume(this.id)
      .subscribe((artistaResume) => {
        this.artistResume = artistaResume;
      });
  }

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
