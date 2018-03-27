import * as mockery from 'mockery';

mockery.enable({ useCleanCache: true });
mockery.warnOnUnregistered(false);

export * from './fetch-h2-mock';
export default mockery;
