import { useRouter } from 'next/router';
import { ReactElement, useEffect, useMemo } from 'react';
import { userService } from '../app/api/userService';
import { Button } from '../app/components/elements/button';
import { RatingCard } from '../app/components/elements/rating-card';
import { Layout } from '../app/components/layout';
import { StartQuizModal } from '../app/components/modals/start-quiz';
import { UserCard } from '../app/components/modules/user-card';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { fetchQuiz } from '../app/store/quiz/slice';
import { toggleModal } from '../app/store/ui/slice';
import { loadGlobalRating, loadMe } from '../app/store/user/slice';

const HomePage: NextPageWithLayout = () => {
    const { userData, globalRating } = useAppSelector((state) => state.user);
    const { startModalOpen } = useAppSelector((state) => state.ui);
    const { quiz, running, loading } = useAppSelector((state) => state.quiz);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        if (!userData) {
            dispatch(loadMe());
        }
    }, [dispatch, userData]);

    useEffect(() => {
        dispatch(fetchQuiz());
        dispatch(loadGlobalRating());
    }, [dispatch]);

    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <StartQuizModal open={startModalOpen} onClose={() => dispatch(toggleModal('startModal'))} />
            <div className="w-100 xs:w-100 sm:w-100 md:w-1/2 lg:w-1/2 xl:w-2/3 flex flex-col items-center">
                <UserCard />
                {quiz && running ? (
                    <Button className="bg-red-800 shadow-xl px-10 py-5" onClick={() => router.push('/fight')}>
                        CONTINUE QUIZ
                    </Button>
                ) : (
                    <Button
                        className="bg-red-800 shadow-xl px-10 py-6"
                        onClick={() => dispatch(toggleModal('startModal'))}
                        loading={loading}
                    >
                        START NEW QUIZ
                    </Button>
                )}
            </div>
            <div className="p-2 grow">
                <div className="text-center text-2xl text-gray-600 my-5">Global rating</div>
                {globalRating?.map((data, index) => (
                    <RatingCard key={data.id} data={data} place={index + 1} />
                ))}
            </div>
        </div>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default HomePage;
