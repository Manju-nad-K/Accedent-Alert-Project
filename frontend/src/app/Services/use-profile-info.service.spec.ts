import { TestBed } from '@angular/core/testing';

import { UseProfileInfoService } from './use-profile-info.service';

describe('UseProfileInfoService', () => {
  let service: UseProfileInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseProfileInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
