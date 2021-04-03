import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiscalizacoesController } from './fiscalizacoes/fiscalizacoes.controller';

@Module({
  imports: [],
  controllers: [AppController, FiscalizacoesController],
  providers: [AppService],
})
export class AppModule {}
