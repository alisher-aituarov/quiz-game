import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authRouter } from './src/routes/auth';
import { difficultyRouter } from './src/routes/difficulty';
import { genreRouter } from './src/routes/genre';
import { questionRouter } from './src/routes/question';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/difficulties', difficultyRouter);
app.use('/genres', genreRouter);
app.use('/questions', questionRouter);

const PORT = 4000;

const server = app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});
