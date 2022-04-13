import { NextPage } from 'next';
import { ReactElement } from 'react';

declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    type NextPageWithLayout = NextPage & {
        getLayout: (p: ReactElement) => ReactElement;
    };

    type RequestError = {
        message: string;
    };
}
export {};
