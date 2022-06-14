import { TestBed } from '@angular/core/testing';

import { JwtAuthHttpInterceptorService } from './jwt-auth-http-interceptor.service';

describe('JwtAuthHttpInterceptorService', () => {
  let service: JwtAuthHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
