import { Routes } from '@angular/router';
import { ArtistPageComponent } from '../pages/artist-page/artist-page.component';
import { NewReleasesComponent } from '../pages/home/new-releases/new-releases.component';
import { SpotifyCallbackComponent } from '../pages/spotify-callback/spotify-callback.component';
import { HotReleasesComponent } from '../pages/home/hot-releases/hot-releases.component';
import { HomeComponent } from '../pages/home/home.component';
import { UserPageComponent } from '../pages/user-page/user-page.component';
import { KpopHistoryComponent } from '../pages/kpop-history/kpop-history.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'new-releases', component: NewReleasesComponent },
      { path: 'hot-releases', component: HotReleasesComponent },
    ],
  },
  { path: 'artist/:id', component: ArtistPageComponent },
  { path: 'spotify/callback', component: SpotifyCallbackComponent },
  { path: 'me', component: UserPageComponent },
  { path: 'history', component: KpopHistoryComponent },
];
