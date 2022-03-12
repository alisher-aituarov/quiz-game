import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SkipQuestionPayload, VerifyAnswerPayload } from '../../types';
import { QuestionState } from '../types';

export const initialState: QuestionState = {
    currentQuestion: null,
    loading: false,
    error: '',
    verifying: false,
};

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        getCurrentQuestion: (state) => {
            state.loading = true;
            state.error = '';
        },
        getCurrentQuestionSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            state.currentQuestion = { ...payload, checked: false };
        },
        getCurrentQuestionError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        verifyAnswer: (state, { payload }: PayloadAction<VerifyAnswerPayload>) => {
            state.verifying = true;
            state.error = '';
        },
        verifyAnswerSuccess: (state, { payload }: PayloadAction<Answer[]>) => {
            state.verifying = false;
            state.error = '';
            if (state.currentQuestion) {
                state.currentQuestion.answers = payload;
                state.currentQuestion.checked = true;
            }
        },
        verifyAnswerError: (state, { payload }) => {
            state.verifying = false;
            state.error = payload;
        },
        skipQuestion: (state, { payload }: PayloadAction<SkipQuestionPayload>) => {
            state.loading = true;
            state.error = '';
        },
        skipQuestionError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export const {
    getCurrentQuestion,
    getCurrentQuestionSuccess,
    getCurrentQuestionError,
    verifyAnswer,
    verifyAnswerError,
    verifyAnswerSuccess,
    skipQuestion,
    skipQuestionError,
} = questionSlice.actions;

export default questionSlice.reducer;
