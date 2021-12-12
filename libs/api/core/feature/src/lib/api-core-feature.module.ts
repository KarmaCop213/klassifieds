import { Module } from '@nestjs/common';

import { ApiAuthFeatureModule } from '@klassifieds/api/auth/feature';

import { ApiCoreFeatureService } from './api-core-feature.service';

@Module({
  providers: [ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
  imports: [ApiAuthFeatureModule],
})
export class ApiCoreFeatureModule {}
