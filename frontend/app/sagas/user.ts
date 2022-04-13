import { call, put } from 'redux-saga/effects';

import { userService } from '../api/userService';
import { loadGlobalRatingError, loadGlobalRatingSuccess, loadMeError, loadMeSuccess } from '../store/user/slice';

export function* loadUserData() {
    try {
        const { data } = yield userService.loadMe();
        yield put(loadMeSuccess(data));
    } catch (error) {
        yield put(loadMeError((error as RequestError).message));
    }
}

export function* loadGlobalRatingSaga() {
    try {
        const { data } = yield userService.getGlobalRating();
        yield put(loadGlobalRatingSuccess(data));
    } catch (error) {
        yield put(loadGlobalRatingError((error as RequestError).message));
    }
}
