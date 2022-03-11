import { all, put, takeLatest, select } from 'redux-saga/effects';
import { login, register } from '../store/auth/slice';
import { loginUser, registerUser } from './auth';

function* rootSaga() {
    yield all([takeLatest(login.type, loginUser)]);
    yield all([takeLatest(register.type, registerUser)]);
}

export default rootSaga;
