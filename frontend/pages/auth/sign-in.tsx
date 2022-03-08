import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../../app/components/layout';
import { Input } from '../../app/components/elements/input';
import { Button } from '../../app/components/elements/button';

const SignInPage: NextPage & { getLayout: any } = () => {
    return (
        <div className="flex h-full w-100 justify-center items-center">
            <div className="w-100 xs:w-100 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 bg-white shadow-xl rounded-lg flex flex-col gap-5 px-4 md:px-7 py-5">
                <div className="font-extrabold text-3xl">SIGN IN</div>
                <div className="text-md">Please enter your credentials. Will not be shared publicly</div>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button className="bg-red-600 py-4 hover:bg-red-700">Sign In</Button>
            </div>
        </div>
    );
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default SignInPage;
