import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessService } from './access.service';
import { CreateAccessDto } from './dto/create-access.dto';
import { Acesso } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/v1/access')
@ApiTags('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Post()
  create(@Body() createAcessoDto: CreateAccessDto): Promise<Acesso> {
    return this.accessService.create(createAcessoDto);
  }

  @Get('all')
  findAll(): Promise<Acesso[]> {
    return this.accessService.findAll();
  }

  @Get('unique/:idTelegram')
  findUnique(
    @Param('idTelegram') idTelegram: string
  ): Promise<Acesso> {
    return this.accessService.findUnique(idTelegram);
  }

  @Delete('remove/:idTelegram')
  deleteUnique(
    @Param('idTelegram') idTelegram: string
  ): Promise<Acesso> {
    return this.accessService.deleteUnique(idTelegram);
  }
}
