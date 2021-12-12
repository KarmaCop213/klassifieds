import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '@klassifieds/api/auth/data-access'
import { ApiAuthFeatureModule } from '@klassifieds/api/auth/feature'

import { ApiCoreFeatureService } from './api-core-feature.service'

@Module({
  providers: [ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017',
      database: 'klassifiedsDB',
      entities: [User],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ApiAuthFeatureModule,
  ],
})
export class ApiCoreFeatureModule {}
