-- CreateTable
CREATE TABLE "Property" (
    "Property_id" TEXT NOT NULL,
    "Property_title" TEXT NOT NULL,
    "Property_photo" TEXT NOT NULL,
    "Property_member_limit" TEXT NOT NULL,
    "Property_bedroom" INTEGER NOT NULL,
    "Property_bathroom" INTEGER NOT NULL,
    "Property_price" TEXT NOT NULL,
    "Property_location" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("Property_id")
);
