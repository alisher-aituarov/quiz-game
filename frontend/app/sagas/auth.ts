import { PayloadAction } from '@reduxjs/toolkit';
import Router from 'next/router';
import { call, put } from 'redux-saga/effects';

import { userService } from '../api/userService';
import { STORAGE_KEYS } from '../constants/storage-keys';
import { loginError, loginSuccess, registerError } from '../store/auth/slice';
import { LoginPayload, RegisterAction, RegisterPayload } from '../types';
import { LocalStorage } from '../utils/local-storage';

export function* loginUser({ payload }: PayloadAction<LoginPayload>) {
    try {
        const { data } = yield userService.login(payload);
        yield call(LocalStorage.set, STORAGE_KEYS.accessToken, data.token);
        yield call(Router.push, '/');
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginError((error as RequestError).message));
    }
}

export function* registerUser({ payload }: PayloadAction<RegisterPayload>) {
    try {
        const { data } = yield userService.register(payload);
        yield call(Router.push, '/auth/sign-in');
    } catch (error) {
        yield put(registerError((error as RequestError).message));
    }
}
