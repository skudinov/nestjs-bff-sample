import {Component} from '@nestjs/common';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import {Ticket} from './tickets.model';
import {setup, fetch, Response} from 'fetch-h2';
import * as assert from 'assert-plus';

@Component()
export class TicketsService {
  constructor() {
    setup({
      session: {
        rejectUnauthorized: false
      }
    });
  }

  findAll(): Promise<Ticket[]> {
    // HTTP/2 client
    const tickets: Promise<Ticket[]> = fetch('https://localhost:3100/tickets')
      .then(async (response: Response) => {
        let result: any[] = await response.json();
        assert.array(result, 'tickets');
        return result;
      });
    return tickets;
  }
}
