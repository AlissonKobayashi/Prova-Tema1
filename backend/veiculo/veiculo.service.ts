import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Veiculo } from './schemas/veiculo.schema';

@Injectable()
export class VeiculoService {
  constructor(@InjectModel(Veiculo.name) private veiculoModel: Model<Veiculo>){}
  create(createVeiculoDto: CreateVeiculoDto){
    this.veiculoModel.create(createVeiculoDto);
    return 'Veículo criado';
  }

  async findAll(): Promise <Veiculo[]> {
    const veiculo = await this.veiculoModel.find().populate('acessorio').exec();
    return veiculo;
  }

  async findOne(id: string): Promise<Veiculo> {
    const veiculo = await this.veiculoModel.findById(id).populate('acessorio').exec();
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

  async createAcessorio(id: string, acessorioId: string): Promise<Veiculo> {
    await this.veiculoModel.findByIdAndUpdate(id, { $addToSet: { acessorio: acessorioId } }, { new: true });
    const veiculo = await this.veiculoModel.findById(id).populate('acessorio').exec();
    if (!veiculo) {
      throw new NotFoundException('Veículo não encontrado');
    }
    return veiculo;
  }

  async removeAcessorio(id: string, acessorioId: string): Promise<Veiculo> {
    const veiculo = await this.veiculoModel.findByIdAndUpdate(id, { $pull: { acessorio: acessorioId } }, 
    { new: true }).populate('acessorio');
    if (!veiculo) {
      throw new NotFoundException('Veículo não encontrado');
    }
    return veiculo;
  }
}
