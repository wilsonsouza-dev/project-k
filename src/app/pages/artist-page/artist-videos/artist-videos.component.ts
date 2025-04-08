import { Component, Input } from '@angular/core';
import { YoutubeApiService } from '../../../shared/api/youtube/youtube-api.service';
import { options } from '../../../shared/data/options';
import { YoutubeVideo } from '../../../shared/model/youtube/youtubeVideo';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-artist-videos',
  imports: [CommonModule, SharedModule],
  templateUrl: './artist-videos.component.html',
  styleUrl: './artist-videos.component.css',
})
export class ArtistVideosComponent {
  @Input() id!: string;
  group: { name: string; id: string; youtubeChannelId: string }[] = [];
  videos: YoutubeVideo[] = [];
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
    { breakpoint: '768px', numVisible: 2, numScroll: 2 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
  constructor(
    private youtubeApiService: YoutubeApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getGroup(this.id);
    this.getMostRelevantVideos();
  }

  selectedVideo: YoutubeVideo | null = null;
  displayModal = false;
  safeVideoUrl?: SafeResourceUrl;

  openVideo(video: YoutubeVideo) {
    this.selectedVideo = video;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`
    );
    this.displayModal = true;
  }

  getGroup(id: string) {
    this.group = options.reduce(
      (
        acc: { name: string; id: string; youtubeChannelId: string }[],
        option
      ) => {
        if (option.id === id) {
          acc.push(option);
        }
        return acc;
      },
      []
    );
  }

  getMostRelevantVideos() {
    if (!this.group?.length) return;

    const [{ youtubeChannelId, name }] = this.group;
    this.youtubeApiService
      .getMostRelevantVideos(youtubeChannelId, name)
      .subscribe({
        next: (response) => {
          this.videos = response.filter(video => video.id.videoId);
          console.log('Vídeos recebidos:', this.videos);
        },
        error: (err) => {
          console.error('Erro ao buscar vídeos:', err);
        },
        complete: () => {
          console.log('Busca de vídeos finalizada');
        },
      });
  }
}
