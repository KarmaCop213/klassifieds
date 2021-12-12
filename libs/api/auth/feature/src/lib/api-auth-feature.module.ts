import { Module } from '@nestjs/common';

import { ApiAuthFeatureResolver } from './api-auth-feature.resolver';

@Module({
  controllers: [],
  providers: [ApiAuthFeatureResolver],
  exports: [],
})
export class ApiAuthFeatureModule {}
