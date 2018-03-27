import {Controller, Get} from '@nestjs/common';
import {TicketsService} from './tickets.service';
import {Ticket, TicketModel} from './tickets.model';
import {Component, ComponentsService} from '../components';
import {TicketsFactory} from './tickets.factory';

@Controller('tickets')
export class TicketsController {
  constructor(private factory: TicketsFactory, private tickets: TicketsService, private components: ComponentsService) {
  }

  @Get()
  async findAll(): Promise<TicketModel[]> {
    const tickets: Ticket[] = await this.tickets.findAll();
    const ids: string[] = tickets.map(ticket => ticket.component.id);
    const components: Component[] = await this.components.findByIds(ids);
    return Promise.resolve(this.factory.map(tickets, components));
  }
}
