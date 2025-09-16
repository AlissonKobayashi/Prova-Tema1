import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Veiculo, VeiculoSchema } from './schemas/veiculo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Veiculo.name, schema: VeiculoSchema }])],
  controllers: [VeiculoController],
  providers: [VeiculoService],
})
export class VeiculoModule {}
