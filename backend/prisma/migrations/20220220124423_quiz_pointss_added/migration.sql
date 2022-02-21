/*
  Warnings:

  - Added the required column `points` to the `quizs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quizs" ADD COLUMN     "points" INTEGER NOT NULL;
