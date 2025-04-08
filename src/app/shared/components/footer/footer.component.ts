import { Component } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { SharedModule } from '../../shared.module';
@Component({
  selector: 'app-footer',
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  faDiscord = faDiscord;

}
