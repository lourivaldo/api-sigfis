import { Controller, Get, Param } from '@nestjs/common';
import { LayersService } from './layers.service';

@Controller('layers')
export class LayersController {

  constructor(private service: LayersService) {}

  @Get(':id.geojson')
  async getFile(@Param('id') id: string): Promise<string> {
    return await this.service.getFile(id);
  }
}
