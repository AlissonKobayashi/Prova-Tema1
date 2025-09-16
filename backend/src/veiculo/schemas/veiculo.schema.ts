import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Acessorio } from 'src/acessorio/schemas/acessorio.schema';

export type VeiculoDocument = HydratedDocument<Veiculo>;

@Schema()
export class Veiculo {
  @Prop()
  modelo: string;

  @Prop()
  anoFabricacao: number;

  @Prop()
  placa: string;

  @Prop({ type: Types.ObjectId, ref: 'Acessorio' })
  acessorio: Acessorio;
}

export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);
