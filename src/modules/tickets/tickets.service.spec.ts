import {fetch_h2_mock} from '../../mocks';
import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {TicketsService} from './tickets.service';

describe('TicketsService', () => {
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
      const expected = require('./tickets.service.mock.json');
      fetch_h2_mock.expect(expected);
      const received = await service.findAll();
      expect(received).toBe(expected);
    });
    it('failed call', async () => {
      // TODO unit tested negative logic flow
    });
  });
});
