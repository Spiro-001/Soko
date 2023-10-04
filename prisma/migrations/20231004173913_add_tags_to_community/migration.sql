-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
