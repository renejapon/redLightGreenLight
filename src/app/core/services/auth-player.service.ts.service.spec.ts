import { TestBed } from '@angular/core/testing';

import { AuthPlayerService } from './auth-player.service.ts.service';

describe('AuthPlayerService', () => {
  let service: AuthPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
