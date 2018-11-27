import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });
  it('should have add method', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.add).toBeTruthy();
  });
  it('should have add correctly', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.add(1,3)).toEqual(4);
  });
  
});
