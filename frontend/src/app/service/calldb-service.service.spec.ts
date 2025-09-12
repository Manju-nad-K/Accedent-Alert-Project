import { TestBed } from '@angular/core/testing';

import { calldbService } from './calldb-service.service';

describe('CalldbServiceService', () => {
  let service: calldbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(calldbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
