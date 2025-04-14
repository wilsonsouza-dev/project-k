import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { options } from '../../../shared/data/options';
import { Artist } from '../../../shared/model/artist';
import { SharedModule } from '../../../shared/shared.module';
import { ArtistApiService } from '../../api/spotify/artist-api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [SharedModule, CommonModule],
})
export class NavbarComponent implements OnInit {
  selectArtist: any = null;
  allArtists: Artist[] = [];
  menuItems: MenuItem[] = [];
  constructor(
    private router: Router,
    private artistApiService: ArtistApiService
  ) {}

  ngOnInit() {
    this.getAllArtists();
  }

  goToHome() {
    this.selectArtist = null;
    this.router.navigate(['']);
  }

  goToArtistPageAndGetRandomArtist() {
    const randomId = options[Math.floor(Math.random() * options.length)].id;
    this.router.navigate(['artist', randomId]);
  }

  onArtistSelect() {
    if (this.selectArtist) {
      this.router.navigate(['artist', this.selectArtist.id]);
    }
  }

  getAllArtists() {
    const allIds = options.map((item) => item.id);
    this.artistApiService.getSeveralArtist(allIds).subscribe((data) => {
      this.allArtists = data;
    });
  }
}
