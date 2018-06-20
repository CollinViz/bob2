import { TestBed, inject } from '@angular/core/testing';

import { AxxessDslService } from './axxess-dsl.service';

describe('AxxessDslService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AxxessDslService]
    });
  });

  it('should be created', inject([AxxessDslService], (service: AxxessDslService) => {
    expect(service).toBeTruthy();
  }));
});
