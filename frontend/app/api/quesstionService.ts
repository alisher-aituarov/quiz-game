import { ApiService } from './apiService';

class QuestionService extends ApiService {
    constructor() {
        super('questions');
    }
    read() {
        return this.get();
    }
}

export const questionService = new QuestionService();
