import { Module } from '@nestjs/common'

import { ApiAuthDataAccessModule } from '@klassifieds/api/auth/data-access'

import { ApiAuthFeatureResolver } from './api-auth-feature.resolver'

@Module({
  controllers: [],
  providers: [ApiAuthFeatureResolver],
  exports: [],
  imports: [ApiAuthDataAccessModule],
})
export class ApiAuthFeatureModule {}
