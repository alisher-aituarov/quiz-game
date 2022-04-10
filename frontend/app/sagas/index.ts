import { all, put, takeLatest, select } from 'redux-saga/effects';
import { login, register } from '../store/auth/slice';
import { getCurrentQuestion, skipQuestion, verifyAnswer } from '../store/question/slice';
import { fetchQuiz, startQuiz } from '../store/quiz/slice';
import { loadGlobalRating, loadMe } from '../store/user/slice';
import { loginUser, registerUser } from './auth';
import { loadCurrentQuestion, skipQuestionSaga, verifyAnswerSaga } from './question';
import { fetchQuizSaga, startQuizSaga } from './quiz';
import { loadGlobalRatingSaga, loadUserData } from './user';

function* rootSaga() {
    yield all([takeLatest(login.type, loginUser)]);
    yield all([takeLatest(register.type, registerUser)]);
    yield all([takeLatest(loadMe.type, loadUserData)]);
    yield all([takeLatest(startQuiz.type, startQuizSaga)]);
    yield all([takeLatest(getCurrentQuestion.type, loadCurrentQuestion)]);
    yield all([takeLatest(verifyAnswer.type, verifyAnswerSaga)]);
    yield all([takeLatest(skipQuestion.type, skipQuestionSaga)]);
    yield all([takeLatest(fetchQuiz.type, fetchQuizSaga)]);
    yield all([takeLatest(loadGlobalRating.type, loadGlobalRatingSaga)]);
}

export default rootSaga;
