import * as Router from 'koa-router';

export interface IRoute {
  methods: string[];
  path: string | RegExp;
  handler: Router.IMiddleware;
  opts?: object;
}

export class Routes extends Array<IRoute> {
  register(): Router.IMiddleware {
    const router = new Router();
    this.forEach((route) => {
      router.register(route.path, route.methods, route.handler, route.opts);
    });
    return router.routes();
  }
}
