import { Module } from '@nestjs/common';
import { SubscribersModule } from './subscribers/subscribers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SubscribersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
