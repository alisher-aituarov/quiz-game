import { combineReducers, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/slice';
import userReducer from './user/slice';
import uiReducer from './ui/slice';
import quizReducer from './quiz/slice';
import questionReducer from './question/slice';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: combineReducers({
        question: questionReducer,
        quiz: quizReducer,
        auth: authReducer,
        user: userReducer,
        ui: uiReducer,
    }),
    middleware: (getDefaultMiddleware: (arg0: { thunk: boolean }) => any) => [
        ...getDefaultMiddleware({ thunk: false }),
        logger,
        sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = typeof store.getState;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
