import { Controller, Get, Query } from '@nestjs/common';
import { FiscalizacoesService } from './fiscalizacoes.service';

@Controller('fiscalizacoes')
export class FiscalizacoesController {

  constructor(private service: FiscalizacoesService) {}

  @Get()
  async index(@Query() query): Promise<any[]> {
    try {
      const { page, type, search = null } = query;
      return await this.service.index(page, type, search);
    } catch (err) {
      console.log(err);
    }
  }
}
