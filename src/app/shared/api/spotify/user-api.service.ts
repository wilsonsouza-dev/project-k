import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../model/user';
import { Artist } from '../../model/artist';
import { Track } from '../../model/track';
@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly apiUrl = `${environment.apiUrl}/me`;

  constructor(private http: HttpClient) {}

  getUser(userId: String): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/${userId}`, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.error('Error fetching profile:', error);
          return throwError(() => new Error('Error loading user'));
        })
      );
  }

  logoutUser(userId: String): Observable<User> {
    return this.http
      .delete<User>(`${this.apiUrl}/logout/${userId}`, {
        withCredentials: true,
      })
      .pipe(
        catchError((error) => {
          console.error('Error deleting profile:', error);
          return throwError(() => new Error('Error deleting user'));
        })
      );
  }

  getUserTopArtists(userId: String, topArtistsTimeRange: string): Observable<Artist[]> {
    return this.http
      .get<Artist[]>(`${this.apiUrl}/top-artists/${userId}`, {
        params : { timeRange: topArtistsTimeRange },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching top artists:', error);
          return throwError(() => new Error('Error loading top artists'));
        })
      );
  }

  getUserTopTracks(userId: String, topSongsTimeRange: string): Observable<Track[]> {
    return this.http
      .get<Track[]>(`${this.apiUrl}/top-tracks/${userId}`, {
        params : { timeRange: topSongsTimeRange },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching top tracks:', error);
          return throwError(() => new Error('Error loading top tracks'));
        })
      );
  }
}
