import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UserApiService } from '../../shared/api/spotify/user-api.service';
import { Artist } from '../../shared/model/artist';
import { Track } from '../../shared/model/track';
import { User } from '../../shared/model/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-page',
  imports: [SharedModule, CommonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent {
  user!: User;
  topTracks: Track[] = [];
  topArtists: Artist[] = [];
  topSongsTimeRange = 'short_term';
  topArtistsTimeRange = 'short_term';
  userId: string = '';

  // Paginação para Top Songs
  topSongsPage: number = 0; // Página atual (base 0)
  topSongsRowsPerPage: number = 9; // Itens por página
  topSongsTotalRecords: number = 0; // Total de itens
  paginatedTopSongs: Track[] = []; // Itens exibidos na página atual

  // Paginação para Top Artists
  topArtistsPage: number = 0; // Página atual (base 0)
  topArtistsRowsPerPage: number = 9; // Itens por página
  topArtistsTotalRecords: number = 0; // Total de itens
  paginatedTopArtists: Artist[] = []; // Itens exibidos na página atual

  constructor(private userApiService: UserApiService) {}

  ngOnInit() {
    // Carregar os dados iniciais
    this.userId = localStorage.getItem('userId') || '';
    if (this.userId) {
      this.loadData();
    }
  }

  loadData() {
    this.updateTopArtists();
    this.updateTopSongs();
    this.getUser();
  }

  getUser() {
    this.userApiService.getUser(this.userId).subscribe((user) => {
      this.user = user;
    });
  }

  updateTopSongs() {
    this.userApiService
      .getUserTopTracks(this.userId, this.topSongsTimeRange)
      .subscribe({
        next: (tracks) => {
          this.topTracks = tracks;
          this.topSongsTotalRecords = tracks.length;
          this.topSongsPage = 0; // Resetar para a primeira página
          this.paginateTopSongs();
        },
        error: (error) => {
          console.error('Erro ao buscar Top Tracks:', error);
        },
      });
  }

  updateTopArtists() {
    this.userApiService
      .getUserTopArtists(this.userId, this.topArtistsTimeRange)
      .subscribe({
        next: (artists) => {
          this.topArtists = artists;
          this.topArtistsTotalRecords = artists.length;
          this.topArtistsPage = 0; // Resetar para a primeira página
          this.paginateTopArtists();
        },
        error: (error) => {
          console.error('Erro ao buscar Top Artists:', error);
        },
      });
  }

  // Paginação para Top Songs
  onTopSongsPageChange(event: any) {
    this.topSongsPage = event.page;
    this.paginateTopSongs();
  }

  paginateTopSongs() {
    const startIndex = this.topSongsPage * this.topSongsRowsPerPage;
    const endIndex = startIndex + this.topSongsRowsPerPage;
    this.paginatedTopSongs = this.topTracks.slice(startIndex, endIndex);
  }

  // Paginação para Top Artists
  onTopArtistsPageChange(event: any) {
    this.topArtistsPage = event.page;
    this.paginateTopArtists();
  }

  paginateTopArtists() {
    const startIndex = this.topArtistsPage * this.topArtistsRowsPerPage;
    const endIndex = startIndex + this.topArtistsRowsPerPage;
    this.paginatedTopArtists = this.topArtists.slice(startIndex, endIndex);
  }

  // Calcular o número de lista para Top Songs
  getTopSongsItemNumber(index: number): number {
    return this.topSongsPage * this.topSongsRowsPerPage + index + 1;
  }

  // Calcular o número de lista para Top Artists
  getTopArtistsItemNumber(index: number): number {
    return this.topArtistsPage * this.topArtistsRowsPerPage + index + 1;
  }

  openSpotifyProfile(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
