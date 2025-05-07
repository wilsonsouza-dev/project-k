import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Track } from '../../model/track';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/env-dev';

@Injectable({
  providedIn: 'root',
})
export class AlbumApiService {
  private readonly apiUrl = `${environment.apiUrl}/album`;

  constructor(private http: HttpClient) {}

  getAlbumTracks(id: string): Observable<Track[]> {
    return this.http
      .get<Track[]>(`${this.apiUrl}/${id}/tracks`)
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
