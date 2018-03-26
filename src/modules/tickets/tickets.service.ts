import {Component} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import {Ticket} from './tickets.model';
import {setup, fetch, Response} from 'fetch-h2';

@Component()
export class TicketsService {
  constructor() {
    setup({
      session: {
        rejectUnauthorized: false
      }
    });
  }

  findAll(): Observable<Ticket[]> {
    // HTTP/2 client
    const result: Promise<Ticket[]> = fetch('https://localhost:3100/tickets')
      .then((response: Response) => {
        return response.json();
      });
    return Observable.fromPromise(result);
  }
}
