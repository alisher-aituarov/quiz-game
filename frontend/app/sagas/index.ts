import { all, put, takeLatest, select } from 'redux-saga/effects';
import { login, register } from '../store/auth/slice';
import { getCurrentQuestion, skipQuestion, verifyAnswer } from '../store/question/slice';
import { startQuiz } from '../store/quiz/slice';
import { loadMe } from '../store/user/slice';
import { loginUser, registerUser } from './auth';
import { loadCurrentQuestion, skipQuestionSaga, verifyAnswerSaga } from './question';
import { startQuizSaga } from './quiz';
import { loadUserData } from './user';

function* rootSaga() {
    yield all([takeLatest(login.type, loginUser)]);
    yield all([takeLatest(register.type, registerUser)]);
    yield all([takeLatest(loadMe.type, loadUserData)]);
    yield all([takeLatest(startQuiz.type, startQuizSaga)]);
    yield all([takeLatest(getCurrentQuestion.type, loadCurrentQuestion)]);
    yield all([takeLatest(verifyAnswer.type, verifyAnswerSaga)]);
    yield all([takeLatest(skipQuestion.type, skipQuestionSaga)]);
}

export default rootSaga;
