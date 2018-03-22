import {Component} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Ticket} from './tickets.model';

@Component()
export class TicketsService {
  constructor() {
  }

  findAll(): Observable<Ticket[]> {
    return Observable.of([{id: 'id1'}]);
  }
}
