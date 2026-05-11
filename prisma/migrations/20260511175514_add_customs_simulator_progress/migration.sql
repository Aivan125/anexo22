-- CreateTable
CREATE TABLE "CustomsSimulatorProgress" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "caseKey" TEXT NOT NULL,
    "currentStepSlug" TEXT NOT NULL,
    "answers" JSONB NOT NULL DEFAULT '{}',
    "journeyResolved" JSONB NOT NULL DEFAULT '[]',
    "completedStages" JSONB NOT NULL DEFAULT '[]',
    "scorePercent" INTEGER,
    "evaluatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomsSimulatorProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CustomsSimulatorProgress_profileId_idx" ON "CustomsSimulatorProgress"("profileId");

-- CreateIndex
CREATE INDEX "CustomsSimulatorProgress_caseKey_idx" ON "CustomsSimulatorProgress"("caseKey");

-- CreateIndex
CREATE UNIQUE INDEX "CustomsSimulatorProgress_profileId_caseKey_key" ON "CustomsSimulatorProgress"("profileId", "caseKey");

-- AddForeignKey
ALTER TABLE "CustomsSimulatorProgress" ADD CONSTRAINT "CustomsSimulatorProgress_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
