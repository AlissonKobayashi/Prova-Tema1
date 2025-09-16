import { HydratedDocument, Types } from 'mongoose';
import { Veiculo } from 'src/veiculo/schemas/veiculo.schema';
export type AcessorioDocument = HydratedDocument<Acessorio>;
export declare class Acessorio {
    nome: string;
    veiculo: Veiculo[];
}
export declare const AcessorioSchema: import("mongoose").Schema<Acessorio, import("mongoose").Model<Acessorio, any, any, any, import("mongoose").Document<unknown, any, Acessorio, any, {}> & Acessorio & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Acessorio, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Acessorio>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Acessorio> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
