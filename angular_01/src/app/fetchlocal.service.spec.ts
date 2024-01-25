import { TestBed } from '@angular/core/testing';

import { FetchlocalService } from './fetchlocal.service';

describe('FetchlocalService', () => {
  let service: FetchlocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchlocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
