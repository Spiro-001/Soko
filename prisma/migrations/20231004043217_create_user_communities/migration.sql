/*
  Warnings:

  - You are about to drop the `_CommunityToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CommunityToUser" DROP CONSTRAINT "_CommunityToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityToUser" DROP CONSTRAINT "_CommunityToUser_B_fkey";

-- DropTable
DROP TABLE "_CommunityToUser";

-- CreateTable
CREATE TABLE "UserCommunities" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,

    CONSTRAINT "UserCommunities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCommunities_id_key" ON "UserCommunities"("id");

-- AddForeignKey
ALTER TABLE "UserCommunities" ADD CONSTRAINT "UserCommunities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCommunities" ADD CONSTRAINT "UserCommunities_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
