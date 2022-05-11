import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateRegisterDto implements Prisma.CadastroUncheckedCreateInput {
  id?: number;

  @ApiProperty({
    maxLength: 20,
  })
  id_telegram: string;

  @ApiProperty({
    maxLength: 1,
  })
  tp_user: string;

  @ApiPropertyOptional({
    maxLength: 6,
  })
  cod_erp?: string;

  @ApiProperty({
    maxLength: 30,
  })
  descricao: string;

  @ApiPropertyOptional()
  acessos?: Prisma.AcessoCreateNestedManyWithoutCadastroInput;

  createAt?: string | Date;
}
