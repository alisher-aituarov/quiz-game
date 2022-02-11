import { protect } from '../middleware/auth';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { verifyAdmin } from '../middleware/verifyAdmin';

const express = require('express');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
	try {
		const data = await prisma.genre.findMany({
			orderBy: [
				{
					name: 'asc',
				},
			],
		});
		res.json({
			data: data,
		});
	} catch (e) {
		res.status(500).send(e.message);
	}
});

router.delete('/:id', protect, async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const response = await prisma.genre.delete({
			where: {
				id: Number(id),
			},
		});
		res.json({
			success: true,
			message: 'Successfully deleted',
		});
	} catch (e) {
		res.status(500).send(e.message);
	}
});

router.post(
	'/',
	protect,
	verifyAdmin,
	body('name').isLength({ min: 4, max: 100 }),
	async (req: Request, res: Response) => {
		const { body } = req;
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).send({
					success: false,
					error: errors.array(),
				});
			}
			await prisma.genre.create({
				data: {
					name: body.name,
				},
			});
			return res.json({
				message: 'Successfully created',
			});
		} catch (e) {
			return res.status(500).send(e.message);
		}
	}
);

export const genreRouter = router;
