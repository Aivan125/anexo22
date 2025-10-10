/*
  Warnings:

  - You are about to drop the column `storagePath` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `VideoPermission` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[youtubeId]` on the table `Video` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `groupId` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtubeId` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."VideoPermission" DROP CONSTRAINT "VideoPermission_profileId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VideoPermission" DROP CONSTRAINT "VideoPermission_videoId_fkey";

-- DropIndex
DROP INDEX "public"."Video_storagePath_key";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "groupId" TEXT;

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "storagePath",
ADD COLUMN     "groupId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "youtubeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."VideoPermission";

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE INDEX "Profile_groupId_idx" ON "Profile"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "Video_youtubeId_key" ON "Video"("youtubeId");

-- CreateIndex
CREATE INDEX "Video_groupId_idx" ON "Video"("groupId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
