import { FC, ReactElement } from 'react';
import { Layout } from '../app/components/layout';

const FightPage: NextPageWithLayout = () => {
    return (
        <div className="flex h-full w-100 justify-center items-center">
            <div className="w-100 xs:w-100 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 bg-white shadow-xl rounded-lg flex flex-col gap-5">
                <div className="w-full h-16 bg-red-500 rounded-t-lg"></div>
                <div className="font-extrabold text-3xl">SIGN IN</div>
                <div className="text-md">Please enter your credentials. Will not be shared publicly</div>
            </div>
        </div>
    );
};

FightPage.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default FightPage;
