/*
  Warnings:

  - The primary key for the `Property` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Property_bathroom` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `Property_bedroom` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `Property_id` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `Property_location` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `Property_member_limit` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `Property_photo` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `Property_price` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `Property_title` on the `Property` table. All the data in the column will be lost.
  - The required column `property_id` was added to the `Property` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `property_rating` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_title` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP CONSTRAINT "Property_pkey",
DROP COLUMN "Property_bathroom",
DROP COLUMN "Property_bedroom",
DROP COLUMN "Property_id",
DROP COLUMN "Property_location",
DROP COLUMN "Property_member_limit",
DROP COLUMN "Property_photo",
DROP COLUMN "Property_price",
DROP COLUMN "Property_title",
ADD COLUMN     "property_id" TEXT NOT NULL,
ADD COLUMN     "property_rating" TEXT NOT NULL,
ADD COLUMN     "property_title" TEXT NOT NULL,
ADD CONSTRAINT "Property_pkey" PRIMARY KEY ("property_id");

-- CreateTable
CREATE TABLE "Property_Category" (
    "property_category_id" TEXT NOT NULL,
    "property_photo" TEXT NOT NULL,
    "property_member_limit" TEXT NOT NULL,
    "property_bedroom" INTEGER NOT NULL,
    "property_bathroom" INTEGER NOT NULL,
    "property_price" TEXT NOT NULL,
    "property_id" TEXT NOT NULL,

    CONSTRAINT "Property_Category_pkey" PRIMARY KEY ("property_category_id")
);

-- CreateTable
CREATE TABLE "Property_Location" (
    "property_location_id" TEXT NOT NULL,
    "main_branch" TEXT NOT NULL,
    "available_locations" TEXT NOT NULL,
    "property_id" TEXT NOT NULL,

    CONSTRAINT "Property_Location_pkey" PRIMARY KEY ("property_location_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_Location_property_id_key" ON "Property_Location"("property_id");

-- AddForeignKey
ALTER TABLE "Property_Category" ADD CONSTRAINT "Property_Category_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property_Location" ADD CONSTRAINT "Property_Location_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE RESTRICT ON UPDATE CASCADE;
