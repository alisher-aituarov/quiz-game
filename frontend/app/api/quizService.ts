import { SkipQuestionPayload, StartQuizPayload, VerifyAnswerPayload } from '../types';
import { ApiService } from './apiService';

class QuizService extends ApiService {
    constructor() {
        super('quizzes');
    }
    start(args: StartQuizPayload): Promise<any> {
        return this.post<Quiz, any>('/start', args);
    }
    getCurrent(): Promise<any> {
        return this.get<Question>('/current');
    }
    verify(args: VerifyAnswerPayload): Promise<any> {
        return this.post(`/verify/${args.questionId}`, { id: args.answerId });
    }
    skip(id: number): Promise<any> {
        return this.post(`/skip/${id}`);
    }
}

export const quizService = new QuizService();
