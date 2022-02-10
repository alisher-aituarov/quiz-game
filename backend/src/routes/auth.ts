import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { SignInPayload, SignUpPayload } from '../types/User';
import { generateToken } from '../utils/security';

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
		console.log(errors.array());

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
				message: 'User created',
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
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});
		if (user && (await bcrypt.compare(password, user.password))) {
			return res.json({
				token: generateToken(user.id),
			});
		}
		return res.status(401).send({
			error: 'Invalid credentials',
		});
	}
);

export const authRouter = router;
