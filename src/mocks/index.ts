import * as mockery from 'mockery';
import {mock as _fetch_h2_mock} from './fetch-h2-mock';

mockery.enable({ useCleanCache: true });
mockery.warnOnUnregistered(false);
mockery.registerMock('fetch-h2', _fetch_h2_mock);

export const fetch_h2_mock = _fetch_h2_mock;
export default mockery;
