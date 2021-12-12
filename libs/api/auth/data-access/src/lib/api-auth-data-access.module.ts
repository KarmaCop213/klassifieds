import { Module } from '@nestjs/common';

import { ApiAuthDataAccessService } from './api-auth-data-access.service';

@Module({
  controllers: [],
  providers: [ApiAuthDataAccessService],
  exports: [ApiAuthDataAccessService],
})
export class ApiAuthDataAccessModule {}
