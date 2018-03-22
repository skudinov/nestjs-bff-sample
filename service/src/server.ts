import * as Koa from 'koa';
import * as logger from 'koa-pino-logger';
import * as fs from 'fs';
import * as http2 from 'http2';
import * as Tickets from './tickets';
import {Routes} from '~/common';

// create Koa app
const app = new Koa();

// init logger middleware and get global logger
const pino = logger();
const log = (pino as any).logger;
app.use(pino);

// define app routes
const routes = new Routes(...Tickets.ROUTES);
app.use(routes.register());

// start HTTP/2 server
const options = {
  key: fs.readFileSync('./selfsigned.key'),
  cert: fs.readFileSync('./selfsigned.crt'),
};

const port = 3100;
const server = http2.createSecureServer(options, (app as any).callback());
server.listen(port);

// it should up and running
log.info(`Listening HTTP/2 on ${port}, use https://localhost:${port}/tickets in Chrome`);
