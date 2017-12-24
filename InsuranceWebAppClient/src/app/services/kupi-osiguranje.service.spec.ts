import { TestBed, inject } from '@angular/core/testing';

import { KupiOsiguranjeService } from './kupi-osiguranje.service';

describe('KupiOsiguranjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KupiOsiguranjeService]
    });
  });

  it('should be created', inject([KupiOsiguranjeService], (service: KupiOsiguranjeService) => {
    expect(service).toBeTruthy();
  }));
});
