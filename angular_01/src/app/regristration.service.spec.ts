import { TestBed } from '@angular/core/testing';

import { RegristrationService } from './regristration.service';

describe('RegristrationService', () => {
  let service: RegristrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegristrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
