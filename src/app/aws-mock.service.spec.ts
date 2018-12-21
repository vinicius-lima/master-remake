import { TestBed } from '@angular/core/testing';

import { AwsMockService } from './aws-mock.service';

describe('AwsMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsMockService = TestBed.get(AwsMockService);
    expect(service).toBeTruthy();
  });
});
