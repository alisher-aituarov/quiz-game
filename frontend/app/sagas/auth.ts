import Router from 'next/router';
import { call, put } from 'redux-saga/effects';

import { userService } from '../api/userService';
import { loginError, loginSuccess, registerError } from '../store/auth/slice';
import { LoginAction, RegisterAction } from '../types';

export function* loginUser({ payload }: LoginAction) {
    try {
        const { data } = yield userService.login(payload);
        yield put(loginSuccess(data));
    } catch (error) {
        yield put(loginError((error as RequestError).message));
    }
}

export function* registerUser({ payload }: RegisterAction) {
    try {
        const { data } = yield userService.register(payload);
        yield call(Router.push, '/auth/sign-in');
    } catch (error) {
        yield put(registerError((error as RequestError).message));
    }
}
