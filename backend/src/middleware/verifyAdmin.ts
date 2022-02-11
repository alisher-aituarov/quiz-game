import { PrismaClient } from '@prisma/client';

const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

export const verifyAdmin = async (req, res, next) => {
	if (req.user.role !== 'ADMIN') {
		return res.status(403).send({
			success: false,
			error: 'Access denied',
		});
	}
	next();
};
