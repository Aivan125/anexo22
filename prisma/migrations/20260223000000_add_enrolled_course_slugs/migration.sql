-- AlterTable
ALTER TABLE "Profile" ADD COLUMN "enrolledCourseSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[];
