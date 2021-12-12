import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ApiAuthDataAccessService } from './api-auth-data-access.service'
import { User } from './entities/user.entity'

@Module({
  controllers: [],
  providers: [ApiAuthDataAccessService],
  exports: [ApiAuthDataAccessService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class ApiAuthDataAccessModule {}
