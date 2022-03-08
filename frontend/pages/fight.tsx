import { FC, ReactElement } from 'react';
import { Button } from '../app/components/elements/button';
import { Checkbox } from '../app/components/elements/checkbox';
import { Layout } from '../app/components/layout';

const FightPage: NextPageWithLayout = () => {
    return (
        <div className="flex h-full w-100 justify-center items-center">
            <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/5 bg-white shadow-xl rounded-lg flex flex-col">
                <div className="w-full h-16 bg-red-500 rounded-t-lg relative overflow-hidden">
                    <div className="absolute bg-blue-500 -right-16 hover:right-0 transition-all bottom-1/2 translate-y-1/2 p-2 pl-4 text-center text-white font-extrabold rounded-l-3xl">
                        3 points
                    </div>
                </div>
                <div className="flex flex-col px-8 py-5 ">
                    <div className="font-extrabold text-lg">How many electrons does hydrogen have?</div>
                    <Checkbox
                        checked={true}
                        onChange={() => null}
                        label="How many electrons does hydrogen have? What do you think"
                    />
                    <Checkbox checked={false} onChange={() => null} label="How many electrons does hydrogen have?" />
                    <Checkbox checked={false} onChange={() => null} label="How many electrons does hydrogen have?" />
                    <Checkbox checked={false} onChange={() => null} label="How many electrons does hydrogen have?" />
                    <div className="flex gap-2 mt-5 justify-end">
                        <Button className="bg-red-500 hover:bg-red-700">Skip</Button>
                        <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
                        {/* <Button className="bg-blue-500 hover:bg-blue-700">Next</Button>
                        <Button className="bg-green-500 hover:bg-green-600">Finish</Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

FightPage.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default FightPage;
