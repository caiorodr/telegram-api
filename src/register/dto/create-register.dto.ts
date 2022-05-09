import { Prisma } from '@prisma/client';

export class CreateRegisterDto implements Prisma.CadastroCreateInput {
  id_telegram: string;
  tp_user: string;
  cod_erp?: string;
  descricao: string;
  acessos?: Prisma.AcessoCreateNestedManyWithoutAcessoInput;
 
}
