import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Access {
  @ApiPropertyOptional()
  id: number;

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

  @ApiPropertyOptional()
  create_at: Date;
}
