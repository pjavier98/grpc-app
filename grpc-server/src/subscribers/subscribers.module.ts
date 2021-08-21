import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.controller';

@Module({
  controllers: [SubscribersService],
  providers: [],
  exports: [],
})
export class SubscribersModule {}
