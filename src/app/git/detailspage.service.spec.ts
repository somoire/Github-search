import { TestBed } from '@angular/core/testing';

import { DetailspageService } from './detailspage.service';

describe('DetailspageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailspageService = TestBed.get(DetailspageService);
    expect(service).toBeTruthy();
  });
});
