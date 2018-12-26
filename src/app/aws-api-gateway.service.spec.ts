import { TestBed } from '@angular/core/testing';

import { AwsApiGatewayService } from './aws-api-gateway.service';

describe('AwsApiGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsApiGatewayService = TestBed.get(AwsApiGatewayService);
    expect(service).toBeTruthy();
  });
});
