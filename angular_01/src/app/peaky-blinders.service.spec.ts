import { TestBed } from '@angular/core/testing';

import { PeakyBlindersService } from './peaky-blinders.service';

describe('PeakyBlindersService', () => {
  let service: PeakyBlindersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeakyBlindersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
