import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpopHistoryComponent } from './kpop-history.component';

describe('KpopHistoryComponent', () => {
  let component: KpopHistoryComponent;
  let fixture: ComponentFixture<KpopHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpopHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpopHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
