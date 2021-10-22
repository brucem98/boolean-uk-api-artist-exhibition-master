-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(225) NOT NULL,
    "lastName" VARCHAR(225) NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);
