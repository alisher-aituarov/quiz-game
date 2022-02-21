import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authRouter } from './src/routes/auth';
import { difficultyRouter } from './src/routes/difficulty';
import { genreRouter } from './src/routes/genre';
import { questionRouter } from './src/routes/question';
import bodyParser from 'body-parser';
import { quizRouter } from './src/routes/quiz';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/difficulties', difficultyRouter);
app.use('/genres', genreRouter);
app.use('/questions', questionRouter);
app.use('/quiz', quizRouter);

const PORT = 4000;

const server = app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});
