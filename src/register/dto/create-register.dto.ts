import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateRegisterDto implements Prisma.CadastroCreateInput {
  @ApiProperty()
  id_telegram: string;
  
  @ApiProperty()
  tp_user: string;

  @ApiPropertyOptional()
  cod_erp?: string;

  @ApiProperty()
  descricao: string;
  
  acessos?: Prisma.AcessoCreateNestedManyWithoutAcessoInput;
 
}
