-- CreateTable
CREATE TABLE "CADASTRO" (
    "id" SERIAL NOT NULL,
    "id_telegram" VARCHAR(20) NOT NULL,
    "tp_user" VARCHAR(1) NOT NULL,
    "cod_erp" VARCHAR(6),
    "descricao" VARCHAR(30) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CADASTRO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ACESSO" (
    "id" SERIAL NOT NULL,
    "rotina" VARCHAR(30) NOT NULL,
    "descricao" VARCHAR(30) NOT NULL,
    "menu" VARCHAR(1) NOT NULL,
    "id_telegram" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ACESSO_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CADASTRO_id_telegram_key" ON "CADASTRO"("id_telegram");

-- AddForeignKey
ALTER TABLE "ACESSO" ADD CONSTRAINT "ACESSO_id_telegram_fkey" FOREIGN KEY ("id_telegram") REFERENCES "CADASTRO"("id_telegram") ON DELETE RESTRICT ON UPDATE CASCADE;
