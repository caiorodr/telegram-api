import { Prisma } from '@prisma/client';

export class CreateAccessDto implements Prisma.AcessoCreateInput {
  id_telegram: string;
  rotina: string;
  descricao: string;
  menu: string;
  acesso: Prisma.CadastroCreateNestedOneWithoutAcessosInput;
}
