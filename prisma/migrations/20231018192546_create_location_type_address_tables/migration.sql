-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(50) NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(50) NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "street" VARCHAR(100) NOT NULL,
    "number" VARCHAR(20) NOT NULL,
    "state" VARCHAR(10) NOT NULL,
    "city" VARCHAR(100) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "locations_description_key" ON "locations"("description");

-- CreateIndex
CREATE UNIQUE INDEX "types_description_key" ON "types"("description");
