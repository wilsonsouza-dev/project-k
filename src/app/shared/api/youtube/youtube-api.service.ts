import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { YoutubeVideo } from '../../model/youtube/youtubeVideo';
@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private readonly apiUrl = `${environment.youtubeApiUrl}/search`;

  constructor(private http: HttpClient) {}

  getMostRelevantVideos(
    id: string,
    group_name: string
  ): Observable<YoutubeVideo[]> {
    return this.http
      .get<YoutubeVideo[]>(`${this.apiUrl}/mostRelevant`, {
        params: { id, group_name },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching most relevant videos:', error);
          return throwError(
            () => new Error('Error loading most relevant videos')
          );
        })
      );
  }
}
