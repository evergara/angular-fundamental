import { TestBed } from '@angular/core/testing';

import { DataAplicationService } from './data-aplication.service';

describe('DataAplicationService', () => {
  let service: DataAplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
