import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMembersComponent } from './artist-members.component';

describe('ArtistMembersComponent', () => {
  let component: ArtistMembersComponent;
  let fixture: ComponentFixture<ArtistMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
