import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SharedModule } from '../../shared.module';
import { AlbumDialogService } from './album-dialog.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.css'],
  imports: [SharedModule, CommonModule, SliderModule, FormsModule],
})
export class AlbumDialogComponent implements OnInit {
  displayDialog$: Observable<boolean>;
  selectedAlbum$: Observable<any>;
  tracks$: Observable<any[]>;
  tracks: any[] = [];
  safeTrackUrl: SafeResourceUrl | null = null;
  trackPreviewId: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private albumDialogService: AlbumDialogService,
    private sanitizer: DomSanitizer
  ) {
    this.displayDialog$ = this.albumDialogService.displayDialog$;
    this.selectedAlbum$ = this.albumDialogService.selectedAlbum$;
    this.tracks$ = this.albumDialogService.tracks$;
  }

  ngOnInit() {
    this.tracks$.pipe(takeUntil(this.destroy$)).subscribe((tracks) => {
      this.tracks = tracks;
    });
  }

  setTrackPreview(id: string) {
    this.trackPreviewId = id;
    this.safeTrackUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/track/${id}`
    );
  }

  onDialogVisibilityChange(event: boolean) {
    this.albumDialogService.setDialogVisibility(event);
  }

  getArtistNames(track: any): string {
    return track.artists.map((artist: any) => artist.name).join(', ');
  }
}
