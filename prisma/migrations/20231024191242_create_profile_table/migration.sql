/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "bio" TEXT,
    "haveBio" BOOLEAN NOT NULL,
    "featuredTrack" TEXT,
    "haveFeaturedTrack" BOOLEAN NOT NULL,
    "featuredVideo" TEXT,
    "haveFeaturedVideo" BOOLEAN NOT NULL,
    "backgroundImage" TEXT,
    "backgroundColor" TEXT NOT NULL DEFAULT 'rgba(0,0,0,0)',
    "profileContainerImage" TEXT,
    "profileContainerColor" TEXT NOT NULL DEFAULT 'rgb(255,255,255)',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_key" ON "User"("profileId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
