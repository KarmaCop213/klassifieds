import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { ApiCoreFeatureModule } from '@klassifieds/api/core/feature';

import { AppService } from './app.service';

@Module({
  imports: [
    ApiCoreFeatureModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
