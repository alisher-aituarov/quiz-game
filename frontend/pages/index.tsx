import { ReactElement, useEffect, useMemo } from 'react';
import { Button } from '../app/components/elements/button';
import { RatingCard } from '../app/components/elements/rating-card';
import { Layout } from '../app/components/layout';
import { StartQuizModal } from '../app/components/modals/start-quiz';
import { UserCard } from '../app/components/modules/user-card';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { toggleModal } from '../app/store/ui/slice';
import { loadMe } from '../app/store/user/slice';

const HomePage: NextPageWithLayout = () => {
    const { userData } = useAppSelector((state) => state.user);
    const { startModalOpen } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!userData) {
            dispatch(loadMe());
        }
    }, [dispatch, userData]);

    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <StartQuizModal open={startModalOpen} onClose={() => dispatch(toggleModal('startModal'))} />
            <div className="w-100 xs:w-100 sm:w-100 md:w-1/2 lg:w-1/2 xl:w-2/3 flex flex-col items-center">
                <UserCard />
                <Button className="bg-red-800 shadow-xl px-8 py-5" onClick={() => dispatch(toggleModal('startModal'))}>
                    START NEW QUIZ
                </Button>
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
