import { Component } from '@angular/core';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { HotReleasesComponent } from './hot-releases/hot-releases.component';
import { RouterOutlet } from '@angular/router';
import { ArtistGridComponent } from "./artist-grid/artist-grid.component";

@Component({
  selector: 'app-home',
  imports: [NewReleasesComponent, HotReleasesComponent, RouterOutlet, ArtistGridComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
