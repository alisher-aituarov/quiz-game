import { ReactElement, useMemo } from 'react';
import { Button } from '../app/components/elements/button';
import { Dropdown } from '../app/components/elements/dropdown';
import { RatingCard } from '../app/components/elements/rating-card';
import { Layout } from '../app/components/layout';
import { Modal } from '../app/components/modals/default';
import { UserCard } from '../app/components/modules/user-card';

const HomePage: NextPageWithLayout = () => {
    /**
     * Create select options 10, 15, 20, 25, 30
     */
    const amountOptions = useMemo(
        () =>
            Array.from(Array(35).keys())
                .filter((k: number) => k % 5 === 0 && k >= 10)
                .map((k) => ({ value: k })),
        [],
    );

    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <Modal
                title="Configure your quiz"
                acceptLabel="Go"
                rejectLabel="Cancel"
                onAccept={() => console.log('test')}
                onReject={() => alert('test')}
            >
                <div className="flex-col flex sm:flex-row gap-2">
                    <Dropdown
                        label="Difficulty"
                        options={[
                            { name: 'Easy', value: 1 },
                            { name: 'Medium', value: 2 },
                        ]}
                    />
                    <Dropdown
                        label="Genre"
                        options={[
                            { name: 'Math', value: 1 },
                            { name: 'Chemistry', value: 2 },
                        ]}
                    />
                    <Dropdown label="Amount" options={amountOptions} />
                </div>
            </Modal>
            <div className="w-100 xs:w-100 sm:w-100 md:w-1/2 lg:w-1/2 xl:w-2/3 flex flex-col items-center">
                <UserCard />
                <Button className="bg-red-800 shadow-xl px-8 py-5">START NEW QUIZ</Button>
            </div>
            <div className="p-2 grow">
                <div className="text-center text-2xl text-gray-600 my-5">Global rating</div>
                <RatingCard />
                <RatingCard />
            </div>
        </div>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default HomePage;
