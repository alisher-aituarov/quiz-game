-- AlterTable
ALTER TABLE "users" ADD COLUMN     "seenQuestions" INTEGER[];

-- CreateTable
CREATE TABLE "quizs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),
    "genreId" INTEGER,
    "difficultyId" INTEGER,

    CONSTRAINT "quizs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "quizs" ADD CONSTRAINT "quizs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizs" ADD CONSTRAINT "quizs_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "difficulties"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizs" ADD CONSTRAINT "quizs_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE SET NULL ON UPDATE CASCADE;
