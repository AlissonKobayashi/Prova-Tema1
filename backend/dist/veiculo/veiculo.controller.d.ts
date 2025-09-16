import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculoController {
    private readonly veiculoService;
    constructor(veiculoService: VeiculoService);
    create(createVeiculoDto: CreateVeiculoDto): string;
    findAll(): Promise<import("./schemas/veiculo.schema").Veiculo[]>;
    findOne(id: string): Promise<import("./schemas/veiculo.schema").Veiculo>;
    update(id: string, updateVeiculoDto: UpdateVeiculoDto): Promise<import("./schemas/veiculo.schema").Veiculo>;
    remove(id: string): Promise<void>;
}
