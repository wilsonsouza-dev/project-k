import { Component, Input, OnInit } from '@angular/core';
import { ArtistApiService } from '../../../shared/api/spotify/artist-api.service';
import { Artist } from '../../../shared/model/artist';
import { ArtistResume } from '../../../shared/model/artistResume';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-artist-resume',
  imports: [SharedModule],
  templateUrl: './artist-resume.component.html',
  styleUrl: './artist-resume.component.css',
})
export class ArtistResumeComponent {
  constructor(private artistApiService: ArtistApiService) {}

  @Input() id!: string;
  artist!: Artist;
  artistResume: ArtistResume = {} as ArtistResume;

  ngOnChanges() {
    this.getArtistById();
    this.getArtistResume();
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
