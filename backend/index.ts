import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authRouter } from './src/routes/auth';
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use('/auth', authRouter);

const PORT = 4000;

const server = app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});
