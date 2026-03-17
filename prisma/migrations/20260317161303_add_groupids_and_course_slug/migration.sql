-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "courseSlug" TEXT;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "groupIds" TEXT[] DEFAULT ARRAY[]::TEXT[];
