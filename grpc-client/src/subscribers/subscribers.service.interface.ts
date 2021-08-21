import { CreateSubscriberDto } from './dto/create-subscriber.dto';

type Subscriber = {
  id: string;
  name: string;
  email: string;
};

type FindOneSubscriber = {
  id: string;
};

interface ISubscribersService {
  createSubscriber(subscriber: CreateSubscriberDto): Promise<any>;
  findAllSubscribers({}): Promise<Subscriber[]>;
  findOneSubscribers({ id }: FindOneSubscriber): Promise<Subscriber>;
}

export { ISubscribersService };
