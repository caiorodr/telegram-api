import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cadastro } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Injectable()
export class RegisterService {
  constructor( private prisma: PrismaService ){}

  async create(createCadastroDto: CreateRegisterDto): Promise<Cadastro> {
    
    try{
      return await this.prisma.cadastro.create({
        data: createCadastroDto
      });
    }catch(error) {
      throw new HttpException(`Ocorreu um erro ao criar o cadastro: ${error}.`, HttpStatus.NOT_FOUND);
    }
  }


  async findAll(): Promise<Cadastro[]> {
    try{
      return await this.prisma.cadastro.findMany();
    }catch(error) {
      throw new HttpException(`Ocorreu um erro ao consultar todos os cadastros: ${error}.`, HttpStatus.NOT_FOUND);
    }

  }


  async findUnique(idTelegram: string): Promise<Cadastro> {

    try{
      return await this.prisma.cadastro.findUnique({
        where: {
          id_telegram: idTelegram
        }
      });
    }catch(error) {
      throw new HttpException(`Ocorreu um erro ao consultar o cadastro: ${error}.`, HttpStatus.NOT_FOUND);
    }

  }
}
