import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistVideosComponent } from './artist-videos.component';

describe('ArtistVideosComponent', () => {
  let component: ArtistVideosComponent;
  let fixture: ComponentFixture<ArtistVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
