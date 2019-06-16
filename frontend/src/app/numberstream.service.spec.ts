import { TestBed } from '@angular/core/testing';

import { NumberstreamService } from './numberstream.service';

describe('NumberstreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberstreamService = TestBed.get(NumberstreamService);
    expect(service).toBeTruthy();
  });
});
