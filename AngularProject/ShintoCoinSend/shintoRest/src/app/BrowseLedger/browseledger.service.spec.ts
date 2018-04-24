import { TestBed, inject } from '@angular/core/testing';

import { SanjoseService } from './sanjose.service';

describe('SanjoseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanjoseService]
    });
  });

  it('should be created', inject([SanjoseService], (service: SanjoseService) => {
    expect(service).toBeTruthy();
  }));
});
