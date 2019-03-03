import { TestBed } from '@angular/core/testing';

import { DownloadImgService } from './download-img.service';

describe('DownloadImgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadImgService = TestBed.get(DownloadImgService);
    expect(service).toBeTruthy();
  });
});
