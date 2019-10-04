import { TestBed } from '@angular/core/testing';

import { RestFulService } from './rest-ful.service';

describe('RestFulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestFulService = TestBed.get(RestFulService);
    expect(service).toBeTruthy();
  });
});
