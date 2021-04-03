import { Controller, Get } from '@nestjs/common';
import { FiscalizacoesRepository } from './fiscalizacoes.repository';

@Controller('fiscalizacoes')
export class FiscalizacoesController {

  constructor(private repository: FiscalizacoesRepository) {}

  @Get('*.geojson')
  async getFile(): Promise<string> {
    return await this.repository.getFile();
  }
}
