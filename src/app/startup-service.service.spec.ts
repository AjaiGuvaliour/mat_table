import { TestBed } from '@angular/core/testing';

import { StartupServiceService } from './startup-service.service';

describe('StartupServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupServiceService = TestBed.get(StartupServiceService);
    expect(service).toBeTruthy();
  });
});
