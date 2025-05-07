import { Routes } from '@angular/router';
import { ArtistPageComponent } from '../pages/artist-page/artist-page.component';
import { HomeComponent } from '../pages/home/home.component';
import { HotReleasesComponent } from '../pages/home/hot-releases/hot-releases.component';
import { NewReleasesComponent } from '../pages/home/new-releases/new-releases.component';
import { KpopHistoryComponent } from '../pages/kpop-history/kpop-history.component';
import { UpdatesComponent } from '../pages/updates/updates.component';
import { NotFoundComponent } from '../pages/artist-page/not-found/not-found.component';

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
  { path: 'history', component: KpopHistoryComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }, // opcional: qualquer rota inválida
];
