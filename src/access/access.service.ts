import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Acesso } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateAccessDto } from './dto/create-access.dto';


@Injectable()
export class AccessService {
  constructor( private prisma: PrismaService ) {}

  async create(createAcessoDto: CreateAccessDto): Promise<Acesso> {

    try{
      
      return await this.prisma.acesso.create({
        data: createAcessoDto
      });

    }catch(error) {
      throw new HttpException(`Ocorreu um erro ao criar o acesso: ${error}.`, HttpStatus.NOT_FOUND);
    }
    
  }

  async findUnique(idTelegram: string): Promise<Acesso> {

    try{
      return await this.prisma.acesso.findUnique({
        where:{
          id_telegram: idTelegram
        }
      });
    }catch(error) {
      throw new HttpException(`Ocorreu um erro ao buscar todos os acessos: ${error}.`, HttpStatus.NOT_FOUND);
    }

  }


  async findAll(): Promise<Acesso[]> {

    try{
      return await this.prisma.acesso.findMany();
    }catch(error) {
      throw new HttpException(`Ocorreu um erro ao buscar todos os acessos: ${error}.`, HttpStatus.NOT_FOUND);
    }

  }
}
