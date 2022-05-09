import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { Cadastro, Prisma } from '@prisma/client';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() createCadastroDto: Prisma.CadastroCreateInput): Promise<Cadastro> {
    return this.registerService.create(createCadastroDto);
  }

  @Get('all')
  findAll(): Promise<Cadastro[]> {
    return this.registerService.findAll();
  }
  

  @Get('unique')
  findUnique(
    @Param('idTelegram') idTelegram: string
  ): Promise<Cadastro> {
    return this.registerService.findUnique(idTelegram);
  }
}
