import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Acessorio } from './schemas/acessorio.schema';
import { Model } from 'mongoose';

@Injectable()
export class AcessorioService {

  constructor(@InjectModel(Acessorio.name) private acessorioModel: Model<Acessorio>){}
  create(createAcessorioDto: CreateAcessorioDto) {
    this.acessorioModel.create(createAcessorioDto);
    return 'Acessorio Criado!';
  }

  async findAll(): Promise <Acessorio[]> {
    const acessorio = await this.acessorioModel.find().exec();
    return acessorio;
  }

  async findOne(id: string): Promise <Acessorio> {
    const acessorio = await this.acessorioModel.findById(id).exec();
    if(!acessorio){
      throw new NotFoundException('Acessorio não encontrado!')
    }
    return acessorio;
  }

  async update(id: string, updateAcessorioDto: UpdateAcessorioDto): Promise<Acessorio> {
    const acessorio = await this.acessorioModel.findByIdAndUpdate(id, updateAcessorioDto).exec();
    if(!acessorio){
      throw new NotFoundException('Acessorio não encontrado!');
    }
    return acessorio;
  }

  async remove(id: string): Promise<void> {
    const acessorio = await this.acessorioModel.findByIdAndDelete(id).exec()
    if(!acessorio){
      throw new NotFoundException('Acessorio não encontrado!');  
    }
  }
}
