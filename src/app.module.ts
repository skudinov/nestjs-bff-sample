import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TicketsModule} from './modules/tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
