import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StartQuizPayload } from '../../types';
import { QuizState } from '../types';

export const initialState: QuizState = {
    quiz: null,
    running: false,
    loading: false,
    error: '',
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        startQuiz: (state, { payload }: PayloadAction<StartQuizPayload>) => {
            state.loading = true;
            state.error = '';
        },
        startQuizSuccess: (state, { payload }: PayloadAction<Quiz>) => {
            state.loading = false;
            state.error = '';
            state.quiz = payload;
            state.running = true;
        },
        startQuizError: (state, { payload }) => {
            state.loading = false;
            state.error = payload as string;
        },
        fetchQuiz: (state) => {
            state.loading = true;
            state.error = '';
        },
        fetchQuizSuccess: (state, { payload }: PayloadAction<Quiz>) => {
            state.loading = false;
            state.error = '';
            state.quiz = payload;
            state.running = !payload.endTime;
        },
        fetchQuizError: (state, { payload }) => {
            state.loading = false;
            state.error = payload as string;
        },
        finishQuiz: (state, { payload }: PayloadAction<Quiz>) => {
            state.running = false;
            state.quiz = payload;
        },
    },
});

export const { startQuiz, startQuizSuccess, startQuizError, fetchQuiz, fetchQuizError, fetchQuizSuccess, finishQuiz } =
    quizSlice.actions;

export default quizSlice.reducer;
