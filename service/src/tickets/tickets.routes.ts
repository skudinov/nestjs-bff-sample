import {IRouterContext} from 'koa-router';
import {sureIsGUID, router} from '~/common';
const tickets = require('./tickets.mock.json');

router.get('/tickets', (ctx: IRouterContext) => {
  ctx.body = tickets;
});

router
  .param('id', sureIsGUID)
  .get('/tickets/:id', (ctx: IRouterContext) => {
    const found = tickets.find((ticket) => ticket.id === ctx.params.id);
    if (!found) {
      return ctx.status = 404;
    }
    ctx.body = found;
  });
