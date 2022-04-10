import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { protect } from '../middleware/auth';
import { SignInPayload, SignUpPayload } from '../types/User';
import { generateToken } from '../utils/security';

const fs = require('fs');
const bcrypt = require('bcrypt');
const express = require('express');
const { body, validationResult } = require('express-validator');

const prisma = new PrismaClient();
const router = express.Router();

router.post(
	'/sign-up',
	body('email').isEmail().withMessage('Invalid email'),
	body('name')
		.isString()
		.isLength({ min: 2, max: 20 })
		.withMessage('Invalid name'),
	body('password')
		.isLength({ min: 8, max: 30 })
		.withMessage('Invalid password'),
	async (req: Request & { body: SignUpPayload }, res: Response) => {
		const { body } = req;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).send({
				success: false,
				error: errors.array(),
			});
		}
		try {
			const salt = await bcrypt.genSalt(10);
			const password = await bcrypt.hash(body.password, salt);

			const response = await prisma.user.create({
				data: {
					email: body.email,
					name: body.name,
					password,
				},
			});

			return res.json({
				success: true,
				message: 'Successfully created',
			});
		} catch (error) {
			return res.status(500).send({
				success: false,
				error,
			});
		}
	}
);

router.post(
	'/sign-in',
	body('email').isEmail(),
	body('password').isString(),
	async (req: Request & { body: SignInPayload }, res: Response) => {
		const { email, password } = req.body;
		console.log(email, password);
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});
		if (user && (await bcrypt.compare(password, user.password))) {
			return res.json({
				data: { token: generateToken(user.id) },
			});
		}
		return res.status(401).send({
			error: 'Invalid credentials',
		});
	}
);

router.get(
	'/me',
	protect,
	async (req: Request & { user: { id: number } }, res: Response) => {
		try {
			const user = await prisma.user.findUnique({
				where: {
					id: req.user.id,
				},
				select: {
					id: true,
					avatar: true,
					email: true,
					name: true,
					role: true,
					score: true,
					quizs: true,
				},
			});
			return res.json({
				data: user,
			});
		} catch (error) {
			return res.status(500).json({
				error: error.message,
			});
		}
	}
);

router.post(
	'/upload-avatar',
	protect,
	async (
		req: Request & { files: any; user: { id: number } },
		res: Response
	) => {
		const dir = './uploads';
		try {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
			const avatar = req.files.avatar;
			if (!avatar) {
				res.status(400).json({
					error: 'No file found',
				});
			}

			const avatarPath =
				dir +
				'/' +
				Math.ceil(Math.random() * 1000) +
				avatar.name.split(' ').join('_');

			avatar.mv(avatarPath);

			await prisma.user.update({
				where: {
					id: req.user.id,
				},
				data: {
					avatar: avatarPath.slice(1),
				},
			});

			return res.send({
				data: 'Picture saved',
			});
		} catch (error) {
			return res.status(500).json({
				error: error.message,
			});
		}
	}
);

router.get('/rating-global', async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany({
			orderBy: {
				score: 'desc',
			},
			take: 10,
			select: {
				id: true,
				avatar: true,
				name: true,
				score: true,
				email: true,
			},
		});
		return res.json({
			data: users,
		});
	} catch ({ message }) {
		return res.status(500).json({
			error: message,
		});
	}
});

export const userRouter = router;
