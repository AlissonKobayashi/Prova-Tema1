import { AcessorioService } from './acessorio.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
export declare class AcessorioController {
    private readonly acessorioService;
    constructor(acessorioService: AcessorioService);
    create(createAcessorioDto: CreateAcessorioDto): string;
    findAll(): Promise<import("./schemas/acessorio.schema").Acessorio[]>;
    findOne(id: string): Promise<import("./schemas/acessorio.schema").Acessorio>;
    update(id: string, updateAcessorioDto: UpdateAcessorioDto): Promise<import("./schemas/acessorio.schema").Acessorio>;
    remove(id: string): Promise<void>;
}
