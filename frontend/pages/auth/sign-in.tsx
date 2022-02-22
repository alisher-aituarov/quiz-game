import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../../app/components/layout';
import { Input } from '../../app/components/elements/input';
import { Button } from '../../app/components/elements/button';

const SignInPage: NextPage & { getLayout: any } = () => {
    return (
        <div className="flex justify-center">
            <div className="col-span-full bg-red-100 rounded-lg flex flex-col gap-10 px-10 py-5">
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button className="bg-blue-500 hover:bg-blue-600">Sign In</Button>
            </div>
        </div>
    );
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default SignInPage;
