/*
  Warnings:

  - Added the required column `description` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "from" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "to" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "School" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "from" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "to" TIMESTAMP(3) NOT NULL;
