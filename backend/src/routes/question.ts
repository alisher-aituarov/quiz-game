import { protect } from '../middleware/auth';
import e, { Request, Response } from 'express';
import { body, validationResult, checkSchema, check } from 'express-validator';
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { verifyAdmin } from '../middleware/verifyAdmin';

const express = require('express');

const router = express.Router();
const prisma = new PrismaClient();

router.get(
	'/',
	async (
		req: Request & { user: { id: number; role: 'ADMIN' | 'USER' } },
		res: Response
	) => {
		try {
			const data = await prisma.question.findMany();
			return res.json({
				data: data,
			});
		} catch (e) {
			return res.status(500).json({
				success: false,
				error: e.message,
			});
		}
	}
);

router.post(
	'/',
	protect,
	check('content').isLength({ min: 2, max: 255 }),
	check('genreId').isInt({ allow_leading_zeroes: false, min: 1 }),
	check('difficultyId').isInt({ allow_leading_zeroes: false, min: 1 }),
	check('pointPrice').isInt({ allow_leading_zeroes: false, min: 1 }),
	check('answers').isArray({ min: 1 }),
	check('answers.*.content').isLength({ min: 2, max: 255 }),
	check('answers.*.correct').isBoolean(),
	async (req: Request & { user: { id: number } }, res: Response) => {
		const { body } = req;
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				error: errors.array(),
			});
		}
		try {
			const response = await prisma.question.create({
				data: {
					content: body.content,
					pointPrice: body.pointPrice,
					ownerId: req.user.id,
					genreId: body.genreId,
					difficultyId: body.difficultyId,
					answers: {
						create: body.answers,
					},
				},
			});
			return res.json({
				success: true,
				message: 'Successfully created',
			});
		} catch (e) {
			return res.status(500).json({
				error: e.message,
			});
		}
	}
);

router.delete(
	'/:id',
	protect,
	async (
		req: Request & { user: { id: number; role: 'ADMIN' | 'USER' } },
		res: Response
	) => {
		const { id } = req.params;
		try {
			const question = await prisma.question.findUnique({
				where: {
					id: Number(id),
				},
			});
			if (!question) {
				return res.status(404).json({
					error: 'Entity not found',
				});
			}
			if (req.user.role === 'ADMIN' || req.user.id === question.ownerId) {
				await prisma.question.delete({
					where: {
						id: question.id,
					},
				});
				return res.json({
					message: 'Successfully deleted',
				});
			} else {
				return res.status(403).json({
					error: 'Access denied',
				});
			}
		} catch (e) {
			return res.status(500).json({
				error: e.message,
			});
		}
	}
);

router.put(
	'/:id',
	check('content').isLength({ min: 2, max: 255 }),
	check('pointPrice').isInt({ allow_leading_zeroes: false, min: 1 }),
	check('genreId').isInt({ allow_leading_zeroes: false, min: 1 }),
	check('difficultyId').isInt({ allow_leading_zeroes: false, min: 1 }),
	check('answers').isArray({ min: 1 }),
	check('answers.*.content').isLength({ min: 2, max: 255 }),
	check('answers.*.correct').isBoolean(),
	protect,
	verifyAdmin,
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const { body } = req;
		try {
			const response = await prisma.question.update({
				data: {
					content: body.content,
					pointPrice: body.pointPrice,
					rating: body.rating,
					active: body.active,
					approved: body.approved,
					genreId: body.genreId,
					difficultyId: body.difficultyId,
				},
				where: {
					id: Number(id),
				},
			});
			return res.json({
				success: true,
				message: 'Successfully updated',
			});
		} catch (e) {
			return res.status(500).json({
				error: e.message,
			});
		}
	}
);

export const questionRouter = router;
