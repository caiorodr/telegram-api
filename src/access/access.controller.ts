import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Headers,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AccessService } from './access.service';
import { CreateAccessDto } from './dto/create-access.dto';
import { Response } from 'express';
import { Acesso } from '@prisma/client';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { IndexAccessSwagger } from './swagger/index-access.swagger';

@ApiBearerAuth('JWT-auth')
@Controller('api/v1/access')
@ApiTags('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar um novo acesso' })
  @ApiResponse({
    status: 201,
    description: 'Cadastro adicionado com sucesso',
    type: IndexAccessSwagger,
  })
  create(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
    @Body() createAcessoDto: CreateAccessDto,
  ): Promise<Acesso> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.accessService.create(createAcessoDto);
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }

  @Get('all')
  @ApiOperation({ summary: 'Lista todos os acessos' })
  @ApiResponse({
    status: 201,
    description: 'Lista de acessos retornado com sucesso',
    type: IndexAccessSwagger,
    isArray: true,
  })
  findAll(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Acesso[]> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.accessService.findAll();
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }

  @Get('unique/:id')
  @ApiOperation({ summary: 'Lista um unico acesso' })
  @ApiResponse({
    status: 201,
    description: 'Acessos retornado com sucesso',
    type: IndexAccessSwagger,
  })
  findUnique(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: number,
  ): Promise<Acesso> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.accessService.findUnique(Number(id));
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }

  @Delete('remove/:id')
  @ApiOperation({ summary: 'Deletar um acesso' })
  @ApiResponse({
    status: 201,
    description: 'Acessos deletado com sucesso',
    type: IndexAccessSwagger,
  })
  deleteUnique(
    @Headers() header,
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: number,
  ): Promise<Acesso> {
    if (header.authorization == process.env.JWT_TOKEN) {
      return this.accessService.deleteUnique(Number(id));
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Token invalido!');
    }
  }
}
