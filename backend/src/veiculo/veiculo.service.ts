import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Veiculo } from './schemas/veiculo.schema';
import { Acessorio } from 'src/acessorio/schemas/acessorio.schema';
import { CreateAcessorioDto } from 'src/acessorio/dto/create-acessorio.dto';

@Injectable()
export class VeiculoService {
  constructor(@InjectModel(Veiculo.name) private veiculoModel: Model<Veiculo>,
   @InjectModel(Acessorio.name) private acessorioModel: Model<Acessorio>){}
  create(createVeiculoDto: CreateVeiculoDto){
    this.veiculoModel.create(createVeiculoDto);
    return 'Veículo criado';
  }

  async findAll(): Promise <Veiculo[]> {
    const veiculo = await this.veiculoModel.find().exec();
    return veiculo;
  }

  async findOne(id: string): Promise<Veiculo> {
    const veiculo = await this.veiculoModel.findById(id).exec();
    if(!veiculo){
      throw new NotFoundException('Veiculo não encontrado')
    }
    return veiculo;
  }

  async update(id: string, updateVeiculoDto: UpdateVeiculoDto): Promise <Veiculo> {
    const veiculo = await this.veiculoModel.findByIdAndUpdate(id, updateVeiculoDto).exec();
    if(!veiculo){
      throw new NotFoundException('Veiculo não encontrado')
    }
    return veiculo;
  }

  async remove(id: string): Promise <void> {
    const veiculo = await this.veiculoModel.findByIdAndDelete(id).exec()
    if(!veiculo){
      throw new NotFoundException('Veiculo não encontrado')
    }
  }

  addAcessorio(createAcessorioDto: CreateAcessorioDto){
    this.acessorioModel.create(createAcessorioDto)
    return 'Acessorio adicionado!'
  }

  async deleteAcessorio(id: string): Promise<void>{
    const acessorio = await this.acessorioModel.findByIdAndDelete(id).exec();
    if(!acessorio){
      throw new NotFoundException('Acessorio não encontrado!')
    }
  }
}
