import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateAccessDto implements Prisma.AcessoCreateInput {
  @ApiProperty()
  id_telegram: string;

  @ApiProperty()
  rotina: string;

  @ApiProperty()
  descricao: string;

  @ApiProperty()
  menu: string;
  
  acesso: Prisma.CadastroCreateNestedOneWithoutAcessosInput;
}
