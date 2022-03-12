import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select } from 'redux-saga/effects';
import { quizService } from '../api/quizService';

import {
    getCurrentQuestion,
    getCurrentQuestionError,
    getCurrentQuestionSuccess,
    verifyAnswerError,
    verifyAnswerSuccess,
} from '../store/question/slice';
import { VerifyAnswerPayload } from '../types';

export function* loadCurrentQuestion() {
    try {
        const { data } = yield quizService.getCurrent();
        yield put(getCurrentQuestionSuccess(data));
    } catch (error) {
        yield put(getCurrentQuestionError((error as RequestError).message));
    }
}

export function* verifyAnswerSaga({ payload }: PayloadAction<VerifyAnswerPayload>) {
    try {
        const { data } = yield quizService.verify(payload);
        yield put(verifyAnswerSuccess(data));
    } catch (error) {
        yield put(verifyAnswerError((error as RequestError).message));
    }
}

export function* skipQuestionSaga() {
    try {
        const currentQuestionID = yield select((state) => state.question.currentQuestion.id);
        const { data } = yield quizService.skip(currentQuestionID);
        console.log(data);
        yield call(loadCurrentQuestion);
    } catch (error) {
        yield put(verifyAnswerError((error as RequestError).message));
    }
}
