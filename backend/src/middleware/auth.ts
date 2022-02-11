import { PrismaClient } from '@prisma/client';

const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

export const protect = async (req, res, next) => {
	const token = req.headers.authorization?.split(' ')?.[1];
	if (!token) {
		return res.status(401).send({
			message: 'Not authorized, no token found',
		});
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await prisma.user.findUnique({
			where: {
				id: decoded.id,
			},
		});
		req.user = user;
		next();
	} catch (e) {
		return res.status(401).send({
			message: 'Invalid token',
		});
	}
};
