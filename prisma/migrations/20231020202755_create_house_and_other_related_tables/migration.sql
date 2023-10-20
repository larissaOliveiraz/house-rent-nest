-- CreateTable
CREATE TABLE "houses" (
    "id" VARCHAR(50) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "daily_price" DECIMAL(65,30) NOT NULL,
    "daily_fine" DECIMAL(65,30) NOT NULL,
    "user_id" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,
    "address_id" TEXT NOT NULL,

    CONSTRAINT "houses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" VARCHAR(50) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" VARCHAR(50) NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" VARCHAR(50) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" VARCHAR(50) NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items_on_houses" (
    "item_id" TEXT NOT NULL,
    "house_id" TEXT NOT NULL,

    CONSTRAINT "items_on_houses_pkey" PRIMARY KEY ("item_id","house_id")
);

-- CreateTable
CREATE TABLE "rooms_on_houses" (
    "room_id" TEXT NOT NULL,
    "house_id" TEXT NOT NULL,

    CONSTRAINT "rooms_on_houses_pkey" PRIMARY KEY ("room_id","house_id")
);

-- AddForeignKey
ALTER TABLE "houses" ADD CONSTRAINT "houses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "houses" ADD CONSTRAINT "houses_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "houses" ADD CONSTRAINT "houses_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "houses" ADD CONSTRAINT "houses_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_on_houses" ADD CONSTRAINT "items_on_houses_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_on_houses" ADD CONSTRAINT "items_on_houses_house_id_fkey" FOREIGN KEY ("house_id") REFERENCES "houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rooms_on_houses" ADD CONSTRAINT "rooms_on_houses_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rooms_on_houses" ADD CONSTRAINT "rooms_on_houses_house_id_fkey" FOREIGN KEY ("house_id") REFERENCES "houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
