import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../../app/components/layout';
import { Input } from '../../app/components/elements/input';
import { Button } from '../../app/components/elements/button';

const SignUpPage: NextPage & { getLayout: any } = () => {
    return (
        <div className="flex h-full w-100 justify-center items-center">
            <div className="w-100 xs:w-100 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 bg-white shadow-xl rounded-lg flex flex-col gap-5 px-4 md:px-7 py-5">
                <div className="font-extrabold text-3xl">SIGN UP</div>
                <div className="text-md">All fields are required to register successfully</div>
                <Input placeholder="Email" />
                <Input placeholder="Nickname" />
                <Input placeholder="Password" />
                <Button className="bg-red-600 py-4 hover:bg-red-700">Sign Up</Button>
            </div>
        </div>
    );
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default SignUpPage;
