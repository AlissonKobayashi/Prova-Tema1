import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
import { Acessorio } from './schemas/acessorio.schema';
import { Model } from 'mongoose';
export declare class AcessorioService {
    private acessorioModel;
    constructor(acessorioModel: Model<Acessorio>);
    create(createAcessorioDto: CreateAcessorioDto): string;
    findAll(): Promise<Acessorio[]>;
    findOne(id: string): Promise<Acessorio>;
    update(id: string, updateAcessorioDto: UpdateAcessorioDto): Promise<Acessorio>;
    remove(id: string): Promise<void>;
}
