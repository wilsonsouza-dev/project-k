import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlbumApiService } from '../../api/spotify/album-api.service'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root',
})
export class AlbumDialogService {
  // Controle do dialog
  private displayDialogSubject = new BehaviorSubject<boolean>(false);
  displayDialog$ = this.displayDialogSubject.asObservable();

  // Dados do álbum e faixas
  private selectedAlbumSubject = new BehaviorSubject<any>(null);
  selectedAlbum$ = this.selectedAlbumSubject.asObservable();

  private tracksSubject = new BehaviorSubject<any[]>([]);
  tracks$ = this.tracksSubject.asObservable();

  constructor(private albumApiService: AlbumApiService) {}

  setDialogVisibility(visible: boolean) {
    this.displayDialogSubject.next(visible);
  }

  showAlbum(album: any) {
    this.albumApiService.getAlbumTracks(album.id).subscribe((tracks) => {
      console.log(tracks);
      this.selectedAlbumSubject.next(album);
      this.tracksSubject.next(tracks);
      this.displayDialogSubject.next(true);
    });
  }

  closeDialog() {
    this.displayDialogSubject.next(false);
  }
}
