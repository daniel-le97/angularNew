import { TestBed } from '@angular/core/testing';

import { PokesServiceService } from './pokes-service.service';

describe('PokesServiceService', () => {
  let service: PokesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
