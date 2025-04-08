import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { options } from '../../../shared/data/options';
import { Artist } from '../../../shared/model/artist';
import { SharedModule } from '../../../shared/shared.module';
import { ArtistApiService } from '../../api/spotify/artist-api.service';
import { User } from '../../model/user';
import { SpotifyAuthService } from '../../services/spotify-auth.service';
import { UserService } from '../../services/user.service';
import { UserApiService } from '../../api/spotify/user-api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [SharedModule, CommonModule],
})
export class NavbarComponent implements OnInit {
  selectArtist: any = null;
  allArtists: Artist[] = [];
  user$: Observable<User | null> | undefined;
  menuItems: MenuItem[] = [];
  constructor(
    private router: Router,
    private artistApiService: ArtistApiService,
    private spotifyAuthService: SpotifyAuthService,
    private userService: UserService,
    private userApiService: UserApiService
  ) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.menuItems = [
      {
        label: 'Dashboard',
        icon: 'fa fa-address-card',
        routerLink: '/me',
      },
      {
        label: 'Logout',
        icon: 'fa fa-right-from-bracket',
        command: () => {
          if (userId) this.logout(userId);
        },
      },
    ];

    this.getAllArtists();

    if (userId) {
      this.userApiService.getUser(userId).subscribe((user) => {
        this.userService.setUser(user);
      });
    }

    this.user$ = this.userService.user$;
  }

  logout(userId: String) {
    console.log('Logging out');
    localStorage.removeItem('userId');
    this.userService.setUser(null);
    this.userApiService.logoutUser(userId).subscribe();
    this.router.navigate(['']);
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
    const allIds = options.map((item) => item.id).join(',');
    this.artistApiService.getSeveralArtist(allIds).subscribe((data) => {
      this.allArtists = data;
    });
  }

  redirectToSpotify() {
    this.spotifyAuthService.redirectToSpotify();
  }
}
