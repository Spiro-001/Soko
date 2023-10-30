-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "banner" TEXT NOT NULL DEFAULT '/no-community-image.jpg',
ADD COLUMN     "headline" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "haveBio" SET DEFAULT false,
ALTER COLUMN "haveFeaturedTrack" SET DEFAULT false,
ALTER COLUMN "haveFeaturedVideo" SET DEFAULT false;
