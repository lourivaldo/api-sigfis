import { getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LayersRepository } from './layers.repository';

@Injectable()
export class LayersService {

  private config = {
    '5ff3d198-5c1c-4107-b57d-8a9d6e26a8fe': 'getFiscalizacoes',
    'ddc3b31f-bae5-43b4-9795-08a6e3f0079e': 'getMunicipios',
    '43c574c3-d85d-43c0-a607-2a443e6ae63c': 'getHidrografia',
    'b32426d2-ad1a-40ad-9955-ca91ba97bcb8': 'getMunicipiosEmergencia',
    '9ae50c01-5fe1-41ea-bd10-6876d3abfd44': 'getFederalRios',
    '9ae50c01-5fe1-41ea-bd10-6876d3abfd48': 'getFederalEspelhosDagua',
    '9ae50c01-5fe1-41ea-bd10-6876d3abfd45': 'getBacias',
    '9ae50c01-5fe1-41ea-bd10-6876d3abfd46': 'getFederalTerrasIndigenasPe',
    '9ae50c01-5fe1-41ea-bd10-6876d3abfd47': 'getUcProtecaoIntegral',
  }

  constructor(private repository: LayersRepository) {}

  async getFile(id): Promise<string> {
    if (this.config[id]) {
      return this.repository[this.config[id]]();
    }

    return Promise.resolve(null);
  }

}
