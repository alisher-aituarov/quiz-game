import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StartQuizPayload } from '../../types';
import { QuizState } from '../types';

export const initialState: QuizState = {
    runningQuiz: null,
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
            state.runningQuiz = payload;
        },
        startQuizError: (state, { payload }) => {
            state.loading = false;
            state.error = payload as string;
        },
    },
});

export const { startQuiz, startQuizSuccess, startQuizError } = quizSlice.actions;

export default quizSlice.reducer;
