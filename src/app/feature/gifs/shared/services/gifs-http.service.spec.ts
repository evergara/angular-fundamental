import { TestBed } from '@angular/core/testing';

import { GifsHttpService } from './gifs-http.service';

describe('GifsHttpService', () => {
  let service: GifsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
