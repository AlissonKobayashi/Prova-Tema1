"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessorioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const acessorio_schema_1 = require("./schemas/acessorio.schema");
const mongoose_2 = require("mongoose");
let AcessorioService = class AcessorioService {
    acessorioModel;
    constructor(acessorioModel) {
        this.acessorioModel = acessorioModel;
    }
    create(createAcessorioDto) {
        this.acessorioModel.create(createAcessorioDto);
        return 'Acessorio Criado!';
    }
    async findAll() {
        const acessorio = await this.acessorioModel.find().exec();
        return acessorio;
    }
    async findOne(id) {
        const acessorio = await this.acessorioModel.findById(id).exec();
        if (!acessorio) {
            throw new common_1.NotFoundException('Acessorio não encontrado!');
        }
        return acessorio;
    }
    async update(id, updateAcessorioDto) {
        const acessorio = await this.acessorioModel.findByIdAndUpdate(id, updateAcessorioDto).exec();
        if (!acessorio) {
            throw new common_1.NotFoundException('Acessorio não encontrado!');
        }
        return acessorio;
    }
    async remove(id) {
        const acessorio = await this.acessorioModel.findByIdAndDelete(id).exec();
        if (!acessorio) {
            throw new common_1.NotFoundException('Acessorio não encontrado!');
        }
    }
};
exports.AcessorioService = AcessorioService;
exports.AcessorioService = AcessorioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(acessorio_schema_1.Acessorio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AcessorioService);
//# sourceMappingURL=acessorio.service.js.map