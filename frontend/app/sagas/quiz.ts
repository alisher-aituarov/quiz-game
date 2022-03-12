import { PayloadAction } from '@reduxjs/toolkit';
import Router from 'next/router';
import { call, put } from 'redux-saga/effects';
import { quizService } from '../api/quizService';
import { startQuizError, startQuizSuccess } from '../store/quiz/slice';
import { toggleModal } from '../store/ui/slice';
import { StartQuizPayload } from '../types';

export function* startQuizSaga({ payload }: PayloadAction<StartQuizPayload>) {
    try {
        const { data } = yield quizService.start(payload);
        yield put(startQuizSuccess(data));
        yield put(toggleModal('startModal'));
        yield call(Router.push, '/fight');
    } catch (error) {
        yield put(startQuizError((error as RequestError).message));
    }
}
