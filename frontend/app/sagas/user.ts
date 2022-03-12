import { call, put } from 'redux-saga/effects';

import { userService } from '../api/userService';
import { loadMeError, loadMeSuccess } from '../store/user/slice';

export function* loadUserData() {
    try {
        const { data } = yield userService.loadMe();
        yield put(loadMeSuccess(data));
    } catch (error) {
        yield put(loadMeError((error as RequestError).message));
    }
}
