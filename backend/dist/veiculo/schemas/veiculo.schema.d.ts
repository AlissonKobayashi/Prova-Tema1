import { HydratedDocument, Types } from 'mongoose';
import { Acessorio } from 'src/acessorio/schemas/acessorio.schema';
export type VeiculoDocument = HydratedDocument<Veiculo>;
export declare class Veiculo {
    modelo: string;
    anoFabricacao: number;
    placa: string;
    acessorio: Acessorio;
}
export declare const VeiculoSchema: import("mongoose").Schema<Veiculo, import("mongoose").Model<Veiculo, any, any, any, import("mongoose").Document<unknown, any, Veiculo, any, {}> & Veiculo & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Veiculo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Veiculo>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Veiculo> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
