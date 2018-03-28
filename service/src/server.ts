import * as Koa from 'koa';
import * as logger from 'koa-pino-logger';
import * as fs from 'fs';
import * as http2 from 'http2';
import {router} from '~/common';
import * as koaSwagger from 'koa2-swagger-ui';
import * as send from 'koa-send';
import './tickets';
import './components';

// create Koa app
const port = 3100;
const app = new Koa();

// init logger middleware and get global logger
const pino = logger();
const log = (pino as any).logger;
app.use(pino);

// define app routes

// route to return API schema
router.get('/api-schema', async (ctx) => {
  await send(ctx, 'schema.json');
});

// register routes with app
app.use(router.routes());

// expose swagger console, in production, it should a separate service
app.use(
  koaSwagger({
    routePrefix: '/api-docs', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: `https://localhost:${port}/api-schema`, // example path to json
    },
  }),
);

// start HTTP/2 server
const options = {
  key: fs.readFileSync('./selfsigned.key'),
  cert: fs.readFileSync('./selfsigned.crt'),
};

const server = http2.createSecureServer(options, (app as any).callback());
server.listen(port);

// it should up and running
log.info(`Listening HTTP/2 on ${port}, use https://localhost:${port}/tickets in Chrome`);
