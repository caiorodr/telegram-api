import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RegisterService } from './register.service';
import { Cadastro } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { CreateRegisterDto } from './dto/create-register.dto';

@Controller('api/v1/registers')
@ApiTags('registers')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() createCadastroDto: CreateRegisterDto): Promise<Cadastro> {
    return this.registerService.create(createCadastroDto);
  }

  @Get('all')
  findAll(): Promise<Cadastro[]> {
    return this.registerService.findAll();
  }
  

  @Get('unique/:idTelegram')
  findUnique(
    @Param('idTelegram') idTelegram: string
  ): Promise<Cadastro> {
    return this.registerService.findUnique(idTelegram);
  }

  @Delete('remove/:idTelegram')
  deleteUnique(
    @Param('idTelegram') idTelegram: string
  ): Promise<Cadastro> {
    return this.registerService.deleteUnique(idTelegram);
  }
}
