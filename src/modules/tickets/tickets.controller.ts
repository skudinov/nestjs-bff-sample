import {Body, Controller, Get, Post} from '@nestjs/common';
import {TicketsService} from './tickets.service';
import {Ticket, TicketModel} from './tickets.model';
import {Component, ComponentsService} from '../components';
import {TicketsFactory} from './tickets.factory';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private factory: TicketsFactory, private tickets: TicketsService, private components: ComponentsService) {
  }

  @Get()
  @ApiOperation({title: 'Get all tickets'})
  @ApiResponse({
    status: 200,
    type: TicketModel,
    description: 'Returns tickets collection',
  })
  async findAll(): Promise<TicketModel[]> {
    const tickets: Ticket[] = await this.tickets.findAll();
    const ids: string[] = tickets.map(ticket => ticket.component.id);
    const components: Component[] = await this.components.findByIds(ids);
    return Promise.resolve(this.factory.map(tickets, components));
  }

  @Post()
  @ApiOperation({title: 'Create ticket'})
  @ApiResponse({
    status: 201,
    description: 'The ticket has been successfully created',
  })
  create(@Body() ticket: Ticket) {

  }
}
