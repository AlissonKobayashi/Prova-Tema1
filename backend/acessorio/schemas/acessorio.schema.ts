import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Veiculo } from 'src/veiculo/schemas/veiculo.schema';

export type AcessorioDocument = HydratedDocument<Acessorio>;

@Schema()
export class Acessorio {
  @Prop()
  nome: string;

  @Prop({type: 'ObjectId', ref: 'veiculo'})
  veiculo: Veiculo[]
}

export const AcessorioSchema = SchemaFactory.createForClass(Acessorio);
