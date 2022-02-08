import { PrismaClient } from '@prisma/client';
import { SignUpPayload } from '../types/User';
const bcrypt = require('bcrypt');
const express = require('express');

const prisma = new PrismaClient();
const router = express.Router();

router.post(
	'/sign-up',
	async (req: Request & { body: SignUpPayload }, res: Response) => {
		const { body } = req;
		const salt = await bcrypt.genSalt(10);
		const password = await bcrypt.hash(body.password, salt);
		const response = await prisma.user.create({
			data: {
				email: body.email,
				name: body.name,
				password,
			},
		});
		console.log(response);
	}
);

// app.get("/feed", async (req, res) => {
//   const posts = await prisma.user.findMany({
//     where: { published: true },
//     include: { author: true },
//   });
//   res.json(posts);
// });

export const authRouter = router;
