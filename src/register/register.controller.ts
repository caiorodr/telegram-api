import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  Headers,
  HttpStatus,
} from '@nestjs/common';
import { RegisterService } from './register.service';
import { Cadastro } from '@prisma/client';
import { Response } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRegisterDto } from './dto/create-register.dto';
import { IndexRegisterSwagger } from './swagger/index-register.swagger';

@ApiBearerAuth('JWT-auth')
@Controller('api/v1/registers')
@ApiTags('registers')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar um novo cadastro' })
  @ApiResponse({
    status: 201,
    description: 'Cadastro adicionado com sucesso',
    type: IndexRegisterSwagger,
  })
  create(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
    @Body() createCadastroDto: CreateRegisterDto,
  ): Promise<Cadastro> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.registerService.create(createCadastroDto);
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }

  @Get('all')
  @ApiOperation({ summary: 'Listar todos os cadastros' })
  @ApiResponse({
    status: 200,
    description: 'Lista de cadastros retornado com sucesso',
    type: IndexRegisterSwagger,
    isArray: true,
  })
  findAll(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Cadastro[]> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.registerService.findAll();
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }

  @Get('unique/:idTelegram')
  @ApiOperation({ summary: 'Lista um unico cadastro' })
  @ApiResponse({
    status: 200,
    description: 'Cadastro retornado com sucesso',
    type: IndexRegisterSwagger,
  })
  findUnique(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
    @Param('idTelegram') idTelegram: string,
  ): Promise<Cadastro> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.registerService.findUnique(idTelegram);
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }

  @Delete('remove/:idTelegram')
  @ApiOperation({ summary: 'Deletar um cadastro' })
  @ApiResponse({
    status: 204,
    description: 'Cadastro romovivo com sucesso',
    type: IndexRegisterSwagger,
  })
  deleteUnique(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
    @Param('idTelegram') idTelegram: string,
  ): Promise<Cadastro> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.registerService.deleteUnique(idTelegram);
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }
}
