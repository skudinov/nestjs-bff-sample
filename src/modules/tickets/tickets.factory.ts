import {Component as NestComponent} from '@nestjs/common';
import {Ticket, TicketModel} from './tickets.model';
import {Component} from '../components';

@NestComponent()
export class TicketsFactory {
  map(tickets: Ticket[], components: Component[]): TicketModel[] {
    let componentsMap = components.reduce((map, c) => {
      map[c.id] = c;
      return map;
    }, {});
    return tickets.map(ticket => {
      let model = Object.assign(new TicketModel(), ticket);
      model.component = componentsMap[ticket.component.id];
      return model;
    });
  }
}
