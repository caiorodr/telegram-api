import { Controller, Get, Post, Body, Param, Delete, Res, Headers, HttpStatus } from '@nestjs/common';
import { RegisterService } from './register.service';
import { Cadastro } from '@prisma/client';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRegisterDto } from './dto/create-register.dto';

@ApiBearerAuth('JWT-auth')
@Controller('api/v1/registers')
@ApiTags('registers')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Headers() header, @Res({ passthrough: true }) res: Response,@Body() createCadastroDto: CreateRegisterDto): Promise<Cadastro> {
    if(header.authorization == process.env.JWT_TOKEN){
      return this.registerService.create(createCadastroDto);
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
    
  }

  @Get('all')
  findAll(
    @Headers() header, @Res({ passthrough: true }) res: Response,
  ): Promise<Cadastro[]> {

    if(header.authorization == process.env.JWT_TOKEN){
      return this.registerService.findAll();
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
    
  }
  

  @Get('unique/:idTelegram')
  findUnique(
    @Headers() header, @Res({ passthrough: true }) res: Response,
    @Param('idTelegram') idTelegram: string
  ): Promise<Cadastro> {

    if(header.authorization == process.env.JWT_TOKEN){
      return this.registerService.findUnique(idTelegram);
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
    
  }

  @Delete('remove/:idTelegram')
  deleteUnique(
    @Headers() header, @Res({ passthrough: true }) res: Response,
    @Param('idTelegram') idTelegram: string
  ): Promise<Cadastro> {
    
    if(header.authorization == process.env.JWT_TOKEN){
      return this.registerService.deleteUnique(idTelegram);
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
    
  }
}
