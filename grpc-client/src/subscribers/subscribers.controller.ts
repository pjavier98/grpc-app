import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ISubscribersService } from './subscribers.service.interface';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('subscribers')
export class SubscribersController implements OnModuleInit {
  private subscribersService: ISubscribersService;

  constructor(@Inject('SUBSCRIBERS_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.subscribersService =
      this.client.getService<ISubscribersService>('SubscribersService');
  }

  @Post()
  create(@Body() createSubscriberDto: CreateSubscriberDto) {
    return this.subscribersService.createSubscriber(createSubscriberDto);
  }

  @Get()
  async findAll() {
    return this.subscribersService.findAllSubscribers({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.subscribersService.findOneSubscribers({
      id,
    });
  }
}
