import * as Router from 'koa-router';
import {IParamMiddleware} from 'koa-router';
export const router = new Router();

export const sureIsGUID: IParamMiddleware = (id, ctx, next) => {
  // validate if id is guid
  return id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)?
    next(): ctx.status = 400;
}
