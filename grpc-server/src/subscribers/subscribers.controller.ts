import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

import { v4 as uuidV4 } from 'uuid';

type Subscriber = {
  id: string;
  name: string;
  email: string;
};

type FindOneSubscriber = {
  id: string;
};

@Controller()
export class SubscribersService {
  private subscribers: Subscriber[];

  constructor() {
    this.subscribers = [
      { id: uuidV4(), name: 'Richard Jenkins', email: 'richard@email.com' },
      { id: uuidV4(), name: 'Jaime M. Greine', email: 'jaime@email.com' },
    ];
  }

  @GrpcMethod('SubscribersService')
  createSubscriber(createSubscriberDto: CreateSubscriberDto) {
    const newSubscriber = {
      ...createSubscriberDto,
      id: uuidV4(),
    };

    this.subscribers.push(newSubscriber);

    return { subscriber: newSubscriber };
  }

  @GrpcMethod()
  findAllSubscribers({}) {
    return { subscribers: this.subscribers };
  }

  @GrpcMethod()
  findOneSubscribers({ id }: FindOneSubscriber) {
    const subscriber = this.subscribers.find(
      (subscriber) => subscriber.id === id,
    );

    return { subscriber };
  }
}
