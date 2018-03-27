import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';


const expected = require('./tickets.service.mock.json');
import mockery, {fetch_h2_mock} from '../../mocks';
mockery.registerMock('fetch-h2', fetch_h2_mock(expected));
import {TicketsService} from './tickets.service';

//mockery.registerMock('fetch-h2', fetch_h2_mock(expected));
//import {fetch_h2_mock} from '../../mocks/fetch-h2-mock';

//import * as mockery from 'mockery';
// mockery.enable({ useCleanCache: true });
// mockery.warnOnUnregistered(false);

//mockery.registerMock('fetch-h2', fetch_h2_mock(expected));
// mockery.registerMock('fetch-h2', {
//   setup: (opts) => {
//   },
//   fetch: (url) => {
//     return Promise.resolve({json: () => expected});
//   }
// });

//import {TicketsService} from './tickets.service';

describe('TicketsService', () => {

  beforeEach(() => {
//    mockery.enable();
  });

  afterEach(() => {
//    mockery.disable();
  });

  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        TicketsService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: TicketsService;
  beforeEach(() => {
    service = module.get(TicketsService);
  });

  it('should exist', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('successful call', async () => {
      const received = await service.findAll();
      expect(received).toBe(expected);
    });
  });
});
