import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { rootReducer } from '../app/store';
import rootSaga from '../app/sagas';
import { Provider } from 'react-redux';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: (arg0: { thunk: boolean }) => any) => [
        ...getDefaultMiddleware({ thunk: false }),
        logger,
        sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>,
    );
}
