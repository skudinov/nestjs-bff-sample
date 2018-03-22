import {IRouterContext} from 'koa-router';
import {IRoute} from '~/common';

const tickets: IRoute = {
  methods: ['GET'],
  path: '/tickets',
  handler: async (ctx: IRouterContext) => {
    ctx.body = require('./tickets.mock.json');
  },
};

export const ROUTES = [tickets];
