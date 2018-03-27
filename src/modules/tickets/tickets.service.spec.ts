import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { TicketsService } from './tickets.service';
import { expect } from 'chai';

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
    expect(service).to.exist;
  });
});
