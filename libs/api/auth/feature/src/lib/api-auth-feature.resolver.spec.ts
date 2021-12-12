import { Test } from '@nestjs/testing';

import { ApiAuthFeatureResolver } from './api-auth-feature.resolver';

describe('ApiAuthFeatureResolver', () => {
  let resolver: ApiAuthFeatureResolver;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiAuthFeatureResolver],
    }).compile();

    resolver = module.get(ApiAuthFeatureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeTruthy();
  });
});
