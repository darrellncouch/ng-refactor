import { TestBed, inject } from '@angular/core/testing';

import { OfficesService } from './offices.service';

describe('OfficesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficesService]
    });
  });

  it('should be created', inject([OfficesService], (service: OfficesService) => {
    expect(service).toBeTruthy();
  }));
});
