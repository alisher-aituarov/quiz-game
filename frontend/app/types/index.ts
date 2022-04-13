import { login } from '../store/auth/slice';
import { loadMe } from '../store/user/slice';

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    email: string;
    name: string;
    password: string;
}

export interface RegisterAction {
    type: typeof login.type;
    payload: RegisterPayload;
}

export interface StartQuizPayload {
    amount: number;
    genreId: number;
    difficultyId: number;
}

export interface VerifyAnswerPayload {
    questionId: number;
    answerId: number;
}

export interface SkipQuestionPayload {
    questionId: number;
}
