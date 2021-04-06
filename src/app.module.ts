import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiscalizacoesController } from './fiscalizacoes/fiscalizacoes.controller';
import { UsersModule } from './users/users.module';
import { FiscalizacoesRepository } from './fiscalizacoes/fiscalizacoes.repository';
import { LayersService } from './layers/layers.service';
import { FiscalizacoesService } from './fiscalizacoes/fiscalizacoes.service';
import { LayersRepository } from './layers/layers.repository';
import { LayersController } from './layers/layers.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [/*Maratona*/],
    }),
    UsersModule,
  ],
  controllers: [AppController, FiscalizacoesController, LayersController],
  providers: [
    AppService,
    FiscalizacoesRepository,
    LayersService,
    FiscalizacoesService,
    LayersRepository,
  ],
})
export class AppModule {}
