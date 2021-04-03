import { Controller, Get } from '@nestjs/common';

@Controller('fiscalizacoes')
export class FiscalizacoesController {

  @Get()
  getHello(): any[] {
    return [];
  }
}
