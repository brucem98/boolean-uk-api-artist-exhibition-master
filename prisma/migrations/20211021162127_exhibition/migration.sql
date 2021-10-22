-- CreateTable
CREATE TABLE "Exhibition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(225) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exhibition_pkey" PRIMARY KEY ("id")
);
