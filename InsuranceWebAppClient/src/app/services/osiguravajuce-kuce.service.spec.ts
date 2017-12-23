import { TestBed, inject } from '@angular/core/testing';

import { OsiguravajuceKuceService } from './osiguravajuce-kuce.service';

describe('OsiguravajuceKuceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsiguravajuceKuceService]
    });
  });

  it('should be created', inject([OsiguravajuceKuceService], (service: OsiguravajuceKuceService) => {
    expect(service).toBeTruthy();
  }));
});
