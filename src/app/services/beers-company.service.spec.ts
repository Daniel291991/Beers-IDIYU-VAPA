import { TestBed } from '@angular/core/testing';

import { BeersCompanyService } from './beers-company.service';

describe('BeersCompanyService', () => {
  let service: BeersCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
