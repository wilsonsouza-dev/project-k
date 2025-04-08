import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/enviroment';
import { UserService } from './user.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthService {
  constructor(private http: HttpClient) {}

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  isLoggedIn(): boolean {
    return this.getUserId() !== null;
  }

  logout() {
    localStorage.removeItem('userId');
  }

  exchangeCodeForToken(code: string): Observable<User> {
    return this.http.post<User>(
      `${environment.apiUrl}/auth/callback`,
      { code },
      { withCredentials: true }
    );
  }

  redirectToSpotify() {
    const authUrl = `${environment.spotifyAuthUrl}?client_id=${
      environment.spotifyClientId
    }&response_type=code&redirect_uri=${encodeURIComponent(
      environment.spotifyRedirectUri
    )}&scope=${encodeURIComponent(environment.spotifyScope)}`;
    console.log(authUrl);
    window.location.href = authUrl;
  }
}
