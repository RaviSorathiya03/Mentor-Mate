/*
  Warnings:

  - You are about to drop the `College` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "College" DROP CONSTRAINT "College_userId_fkey";

-- AlterTable
ALTER TABLE "Community" ALTER COLUMN "imageUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Referral" ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "College";
