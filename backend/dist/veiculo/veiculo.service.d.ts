import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Model } from 'mongoose';
import { Veiculo } from './schemas/veiculo.schema';
export declare class VeiculoService {
    private veiculoModel;
    constructor(veiculoModel: Model<Veiculo>);
    create(createVeiculoDto: CreateVeiculoDto): string;
    findAll(): Promise<Veiculo[]>;
    findOne(id: string): Promise<Veiculo>;
    update(id: string, updateVeiculoDto: UpdateVeiculoDto): Promise<Veiculo>;
    remove(id: string): Promise<void>;
}
