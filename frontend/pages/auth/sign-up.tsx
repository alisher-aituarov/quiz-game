import type { ReactElement } from 'react';
import { Layout } from '../../app/components/layout';

const SignUpPage: NextPageWithLayout = () => {
    return <div className="text-3xl text-red-500 font-bold underline">Sign up</div>;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default SignUpPage;
