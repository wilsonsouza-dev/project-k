import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ArtistResume } from '../../../shared/model/artistResume';
import { CommonModule } from '@angular/common';
import { Member } from '../../../shared/model/member';

@Component({
  selector: 'app-artist-members',
  imports: [SharedModule, CommonModule],
  templateUrl: './artist-members.component.html',
  styleUrl: './artist-members.component.css',
})
export class ArtistMembersComponent {
  @Input() members: Member[] = [];
}
