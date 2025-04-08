import { TestBed } from '@angular/core/testing';

import { AlbumDialogService } from './album-dialog.service';

describe('AlbumDialogService', () => {
  let service: AlbumDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
