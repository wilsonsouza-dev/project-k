import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistResumeComponent } from './artist-resume.component';

describe('ArtistResumeComponent', () => {
  let component: ArtistResumeComponent;
  let fixture: ComponentFixture<ArtistResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
