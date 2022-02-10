import { protect } from '../middleware/auth';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { PrismaClient } from '@prisma/client';

const express = require('express');

const router = express.Router();
const prisma = new PrismaClient();

router.post(
	'/',
	protect,
	body('name').isLength({ min: 4, max: 100 }),
	async (req: Request & { user:  }, res: Response) => {
		const { body } = req;
		try {
			if (req.user.role !== 'ADMIN') {
				return res.status(403).send({
					success: false,
					error: 'Access denied',
				});
			}
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).send({
					success: false,
					error: errors.array(),
				});
			}
			await prisma.difficulty.create({
				data: {
					name: body.name,
				},
			});
			return res.json({
				message: 'Difficulty created',
			});
		} catch (e) {
			return res.status(500).send({
				success: false,
				error: e.message,
			});
		}
	}
);

export const difficultyRouter = router;
