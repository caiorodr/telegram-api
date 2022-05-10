import { Controller, Get, Post, Body, Param, Delete, Headers, Res, HttpStatus } from '@nestjs/common';
import { AccessService } from './access.service';
import { CreateAccessDto } from './dto/create-access.dto';
import { Response } from 'express';
import { Acesso } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('api/v1/access')
@ApiTags('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Post()
  create(@Headers() header, @Res({ passthrough: true }) res: Response, @Body() createAcessoDto: CreateAccessDto): Promise<Acesso> {
    if(header.authorization == process.env.JWT_TOKEN) {
      return this.accessService.create(createAcessoDto);
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
    
  }

  @Get('all')
  findAll(@Headers() header, @Res({ passthrough: true }) res: Response): Promise<Acesso[]> {
    
    if(header.authorization == process.env.JWT_TOKEN) {
      return this.accessService.findAll();
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
  }

  
  @Get('unique/:idTelegram')
  findUnique(
    @Headers() header, @Res({ passthrough: true }) res: Response,
    @Param('idTelegram') idTelegram: string
  ): Promise<Acesso> {

    if(header.authorization == process.env.JWT_TOKEN) {
      return this.accessService.findUnique(idTelegram);
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
    
  }

  @Delete('remove/:idTelegram')
  deleteUnique(
    @Headers() header, @Res({ passthrough: true }) res: Response,
    @Param('idTelegram') idTelegram: string
  ): Promise<Acesso> {

    if(header.authorization == process.env.JWT_TOKEN){
      return this.accessService.deleteUnique(idTelegram);
    }else{
      res.status(HttpStatus.BAD_REQUEST).send('Token invalido!');
    }
    
  }
}
