-- CreateTable
CREATE TABLE "CADASTRO" (
    "id" SERIAL NOT NULL,
    "id_telegram" VARCHAR(20) NOT NULL,
    "tp_user" VARCHAR(1) NOT NULL,
    "cod_erp" VARCHAR(6),
    "descricao" VARCHAR(30) NOT NULL,

    CONSTRAINT "CADASTRO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acesso" (
    "id" SERIAL NOT NULL,
    "rotina" VARCHAR(30) NOT NULL,
    "descricao" VARCHAR(30) NOT NULL,
    "menu" VARCHAR(1) NOT NULL,
    "id_telegram" TEXT NOT NULL,

    CONSTRAINT "Acesso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CADASTRO_id_telegram_key" ON "CADASTRO"("id_telegram");

-- AddForeignKey
ALTER TABLE "Acesso" ADD CONSTRAINT "Acesso_id_telegram_fkey" FOREIGN KEY ("id_telegram") REFERENCES "CADASTRO"("id_telegram") ON DELETE RESTRICT ON UPDATE CASCADE;
