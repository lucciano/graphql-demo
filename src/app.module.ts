import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsResolvers } from './cat.resolver';
import { CatsService } from './cat.service';

@Module({
  imports: [ GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    installSubscriptionHandlers: true,
  }),],
  controllers: [AppController],
  providers: [AppService, CatsResolvers, CatsService],
})
export class AppModule {}
