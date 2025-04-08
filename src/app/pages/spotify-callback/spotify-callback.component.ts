import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyAuthService } from '../../shared/services/spotify-auth.service';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-spotify-callback',
  templateUrl: './spotify-callback.component.html',
})
export class SpotifyCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authSpotifyService: SpotifyAuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    console.log('Código recebido:', code);
    if (code) {
      this.authSpotifyService.exchangeCodeForToken(code).subscribe({
        next: (user) => {
          this.userService.setUser(user);
          this.router.navigate(['']); 
          window.location.reload();
        },
        error: (error) => {
          console.error('Erro ao trocar código por token:', error)
        }
      });
    }
  }
}
