import {IRouterContext} from 'koa-router';
import {sureIsGUID, router} from '~/common';
const components = require('./components.mock.json');

router.get('/components', (ctx: IRouterContext) => {
  ctx.body = components;
});

router
  .param('id', sureIsGUID)
  .get('/components/:id', (ctx: IRouterContext) => {
    const found = components.find((ticket) => ticket.id === ctx.params.id);
    if (!found) {
      return ctx.status = 404;
    }
    ctx.body = found;
  });


