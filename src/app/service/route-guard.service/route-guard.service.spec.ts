import { TestBed } from '@angular/core/testing';

import { RouterGuardService } from './router-guard.service';

describe('RouteGuardService', () => {
  let service: RouterGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
