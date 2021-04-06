import { Injectable } from '@nestjs/common';
import { FiscalizacoesRepository } from './fiscalizacoes.repository';

@Injectable()
export class FiscalizacoesService {

  constructor(private repository: FiscalizacoesRepository) {}

  async index(page: number, type: string, search?: string): Promise<any[]> {
    return this.repository.index(page, type, search);
  }

}
