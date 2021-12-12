import { Test } from '@nestjs/testing';

import { ApiCoreFeatureService } from './api-core-feature.service';

describe('ApiCoreFeatureService', () => {
  let service: ApiCoreFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCoreFeatureService],
    }).compile();

    service = module.get(ApiCoreFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
