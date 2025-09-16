import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeiculoModule } from './veiculo/veiculo.module';
import { AcessorioModule } from './acessorio/acessorio.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/prova-tema1'), VeiculoModule, AcessorioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
