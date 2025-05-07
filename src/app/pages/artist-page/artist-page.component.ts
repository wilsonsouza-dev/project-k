import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistApiService } from '../../shared/api/spotify/artist-api.service';
import { AlbumDialogComponent } from '../../shared/components/album-dialog/album-dialog.component';
import { Artist } from '../../shared/model/artist';
import { ArtistResume } from '../../shared/model/artistResume';
import { SharedModule } from '../../shared/shared.module';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { ArtistMembersComponent } from './artist-members/artist-members.component';
import { ArtistResumeComponent } from './artist-resume/artist-resume.component';
import { ArtistVideosComponent } from './artist-videos/artist-videos.component';
import { options } from '../../shared/data/options';

@Component({
  selector: 'app-artist-page',
  imports: [
    SharedModule,
    CommonModule,
    AlbumDialogComponent,
    ArtistVideosComponent,
    ArtistResumeComponent,
    ArtistMembersComponent,
    ArtistAlbumsComponent,
  ],
  templateUrl: './artist-page.component.html',
})
export class ArtistPageComponent implements OnInit {
  constructor(
    private artistApiService: ArtistApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id!: string;
  artist!: Artist;
  artistResume: ArtistResume = {} as ArtistResume;
  loading: boolean = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;

      const artistExists = options.some((artist) => artist.id === this.id);
      if (!artistExists) {
        this.router.navigate(['/not-found']);
        return;
      }
      this.loadData();
    });
  }

  // Load all data
  loadData() {
    this.getArtistById();
    this.getArtistResume();
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
}
