import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../model/artist';
import { Track } from '../../model/track';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ArtistResume } from '../../model/artistResume';
import { Album } from '../../model/album';
import { environment } from '../../../../environment/env-prod';
@Injectable({
  providedIn: 'root',
})
export class ArtistApiService {
  private readonly apiUrl = `${environment.apiUrl}/artist`;
  private readonly jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getSeveralArtist(ids: string[]): Observable<Artist[]> {
    return this.http
      .post<Artist[]>(`${this.apiUrl}/severalArtists`, ids, {
        headers: this.jsonHeaders,
      })
      .pipe(catchError(this.handleError));
  }
  

  getArtistById(id: string): Observable<Artist> {
    return this.http
      .get<Artist>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  getNewReleases(ids: string[]): Observable<Album[]> {
    return this.http
      .post<Album[]>(`${this.apiUrl}/newReleases`, ids, {
        headers: this.jsonHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  getNewestAlbumBySeveralArtist(ids: string[]): Observable<Track[]> {
    return this.http
      .post<Track[]>(`${this.apiUrl}/newestAlbumBySeveralArtist`, ids, {
        headers: this.jsonHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  getArtistResume(id: string): Observable<ArtistResume> {
    return this.http
      .get<ArtistResume>(`${this.apiUrl}/${id}/resumeArtist`)
      .pipe(catchError(this.handleError));
  }

  getAlbumsByArtist(id: string): Observable<Album[]> {
    return this.http
      .get<Album[]>(`${this.apiUrl}/${id}/albums`)
      .pipe(catchError(this.handleError));
  }

  // Função de tratamento de erro genérico
  private handleError(error: any) {
    const errorMessage =
      error.error instanceof ErrorEvent
        ? `Erro no cliente: ${error.error.message}`
        : `Erro no servidor (Status: ${error.status}) - ${error.message}`;

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
