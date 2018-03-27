import {Module} from '@nestjs/common';
import {TicketsController} from './tickets.controller';
import {TicketsService} from './tickets.service';
import {TicketsFactory} from './tickets.factory';
import {ComponentsModule} from '../components';

@Module({
  imports: [ComponentsModule],
  controllers: [
    TicketsController,
  ],
  components: [
    TicketsFactory, TicketsService,
  ],
})
export class TicketsModule {
}
