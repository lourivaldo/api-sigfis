import { Test, TestingModule } from '@nestjs/testing';
import { FiscalizacoesController } from './fiscalizacoes.controller';

describe('FiscalizacoesController', () => {
  let controller: FiscalizacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiscalizacoesController],
    }).compile();

    controller = module.get<FiscalizacoesController>(FiscalizacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
