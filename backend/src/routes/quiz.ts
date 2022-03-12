import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { protect } from '../middleware/auth';

const express = require('express');

const router = express.Router();
const prisma = new PrismaClient();

router.post(
	'/start',
	protect,
	async (
		req: Request & { user: { id: number; seenQuestions: number[] } },
		res: Response
	) => {
		const { body, user } = req;

		const genreId = +body.genreId;
		const difficultyId = +body.difficultyId;
		const amount = +body.amount;
		try {
			const questions = await prisma.question.findMany({
				where: {
					NOT: {
						id: {
							in: user.seenQuestions,
						},
					},
					genreId: genreId,
					difficultyId: difficultyId,
				},
				take: amount,
			});
			if (questions.length < amount) {
				return res.status(404).json({
					error: 'Not enough questions found',
				});
			}
			const response = await prisma.quiz.create({
				data: {
					userId: user.id,
					genreId,
					difficultyId,
					amount: amount,
					questions: questions.map((q) => q.id),
				},
			});
			return res.json({
				success: true,
				data: response,
			});
		} catch (e) {
			return res.status(500).json({
				error: e.message,
			});
		}
	}
);

router.get(
	'/current',
	protect,
	async (
		req: Request & { user: { id: number; seenQuestions: number[] } },
		res: Response
	) => {
		const { user } = req;
		try {
			const quiz = await prisma.quiz.findFirst({
				where: {
					userId: user.id,
				},
				orderBy: {
					startTime: 'desc',
				},
			});
			if (!quiz.questions.length) {
				return res.status(404).json({
					message: 'You have finished quiz!',
				});
			}
			const question = await prisma.question.findUnique({
				where: {
					id: quiz.questions.pop(),
				},
				include: {
					answers: {
						select: {
							id: true,
							content: true,
						},
					},
				},
			});

			return res.json({
				data: question,
				done: !!(quiz.questions.length - 1),
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error.message,
			});
		}
	}
);

router.post(
	'/verify/:id',
	protect,
	async (
		req: Request & { user: { id: number; seenQuestions: number[] } },
		res: Response
	) => {
		const questionID = +req.params.id;
		const userAnswerID = +req.body.id;
		const userID = +req.user.id;
		try {
			const question = await prisma.question.findUnique({
				where: {
					id: questionID,
				},
				include: {
					answers: true,
				},
			});

			const correctAnswerID = question.answers.find((q) => q.correct)?.id;

			const correctlyAnswered = correctAnswerID === userAnswerID;

			const quiz = await prisma.quiz.findFirst({
				where: {
					userId: userID,
				},
				orderBy: {
					startTime: 'desc',
				},
			});
			if (!quiz.questions.includes(question.id)) {
				return res.status(400).json({
					error: 'You have already answered to that question',
				});
			}
			await prisma.quiz.update({
				where: {
					id: quiz.id,
				},
				data: {
					questions: quiz.questions.slice(0, -1),
					points: correctlyAnswered
						? quiz.points + question.pointPrice
						: quiz.points - question.pointPrice,
				},
			});
			await prisma.user.update({
				where: {
					id: req.user.id,
				},
				data: {
					seenQuestions: [...req.user.seenQuestions, question.id],
				},
			});
			await prisma.quiz.update({
				where: {
					id: quiz.id,
				},
				data: {
					current: quiz.current + 1,
					...(quiz.current + 1 === quiz.amount && { endTime: new Date() }),
				},
			});
			return res.json({
				data: question.answers,
			});
		} catch (error) {
			res.status(500).json({
				error: error.message,
			});
		}
	}
);

router.post(
	'/finish',
	protect,
	async (
		req: Request & { user: { id: number; score: number } },
		res: Response
	) => {
		const { user } = req;
		try {
			const quiz = await prisma.quiz.findFirst({
				where: {
					userId: user.id,
				},
				orderBy: {
					startTime: 'desc',
				},
			});
			if (!quiz.questions.length) {
				return res.status(404).json({
					message: 'You have finished quiz!',
				});
			}
			const question = await prisma.question.findUnique({
				where: {
					id: quiz.questions.pop(),
				},
				include: {
					answers: {
						select: {
							id: true,
							content: true,
						},
					},
				},
			});
		} catch (error) {
			return res.status(500).json({
				error: error.message,
			});
		}
	}
);

router.post(
	'/skip/:id',
	protect,
	async (
		req: Request & {
			user: { id: number; score: number; seenQuestions: number[] };
		},
		res: Response
	) => {
		const { user } = req;
		try {
			const question = await prisma.question.findUnique({
				where: {
					id: +req.params.id,
				},
			});
			const quiz = await prisma.quiz.findFirst({
				where: {
					userId: user.id,
				},
				orderBy: {
					startTime: 'desc',
				},
			});
			if (!quiz.questions.includes(question.id)) {
				return res.status(400).json({
					error: 'You have already answered to that question',
				});
			}
			await prisma.quiz.update({
				where: {
					id: quiz.id,
				},
				data: {
					questions: quiz.questions.slice(0, -1),
					points: quiz.points - 1,
					current: quiz.current + 1,
					...(quiz.current + 1 === quiz.amount && { endTime: new Date() }),
				},
			});
			await prisma.user.update({
				where: {
					id: req.user.id,
				},
				data: {
					seenQuestions: [...req.user.seenQuestions, question.id],
				},
			});
			return res.json({
				success: true,
			});
		} catch (error) {
			return res.status(500).json({
				error: error.message,
			});
		}
	}
);

export const quizRouter = router;
