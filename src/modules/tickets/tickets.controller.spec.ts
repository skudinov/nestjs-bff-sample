import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {TicketsController} from './tickets.controller';
import {expect} from 'chai';
import {TicketsService} from './tickets.service';
import {TicketsFactory} from './tickets.factory';
import {ComponentsService} from '../components';

describe('TicketsController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [TicketsController],
      components: [TicketsFactory, TicketsService, ComponentsService]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: TicketsController;
  beforeEach(() => {
    controller = module.get(TicketsController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
