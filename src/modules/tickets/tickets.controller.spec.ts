import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { TicketsController } from './tickets.controller';
import { expect } from 'chai';

describe('TicketsController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        TicketsController
      ]
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
