import {Controller, Get} from '@nestjs/common';
import {TicketsService} from './tickets.service';
import {Observable} from 'rxjs/Observable';
import {Ticket} from './tickets.model';

@Controller('tickets')
export class TicketsController {
  constructor(private service: TicketsService) {
  }

  @Get()
  findAll(): Observable<Ticket[]> {
    return this.service.findAll();
  }
}
