import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateAccessDto implements Prisma.AcessoUncheckedCreateInput {
  id?: number;

  @ApiProperty({
    maxLength: 30,
  })
  rotina: string;

  @ApiProperty({
    maxLength: 30,
  })
  descricao: string;

  @ApiProperty({
    maxLength: 1,
  })
  menu: string;

  @ApiProperty({
    maxLength: 20,
  })
  id_telegram: string;

  create_at?: string | Date;
}
