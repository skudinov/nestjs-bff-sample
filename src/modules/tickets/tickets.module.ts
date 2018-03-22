import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';

@Module({
  controllers: [
    TicketsController,
  ],
  components: [
    TicketsService,
  ],
})
export class TicketsModule {}
