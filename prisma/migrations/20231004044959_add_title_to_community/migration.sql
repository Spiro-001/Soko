-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'undefined';

-- AlterTable
ALTER TABLE "UserCommunities" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;