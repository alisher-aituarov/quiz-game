import { FC, ReactElement, useEffect, useState } from 'react';
import { Button } from '../app/components/elements/button';
import { Checkbox } from '../app/components/elements/checkbox';
import { Radio } from '../app/components/elements/radio';
import { Layout } from '../app/components/layout';
import { Tooltip } from '../app/components/tooltip';
import { withAuth } from '../app/HOC/with-auth';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { getCurrentQuestion, skipQuestion, verifyAnswer } from '../app/store/question/slice';

const FightPage: NextPageWithLayout = () => {
    const [chosenAnswer, setChosenAnswer] = useState<number | null>(null);
    const { currentQuestion, loading, error } = useAppSelector((state) => state.question);
    const dispatch = useAppDispatch();

    useEffect(() => void dispatch(getCurrentQuestion()), []);

    const onSubmitAnswer = () => {
        if (!currentQuestion || !chosenAnswer) {
            return;
        }
        dispatch(verifyAnswer({ questionId: currentQuestion.id, answerId: chosenAnswer }));
    };

    if (loading && !currentQuestion) {
        return (
            <div className="flex h-full w-100 justify-center items-center">
                <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/5 bg-white shadow-xl rounded-lg flex flex-col">
                    Loading
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full w-100 justify-center items-center">
            <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/5 bg-white shadow-xl rounded-lg flex flex-col">
                <div className="w-full h-16 bg-red-500 rounded-t-lg relative overflow-hidden">
                    <div className="absolute bg-blue-500 -right-16 hover:right-0 transition-all bottom-1/2 translate-y-1/2 p-2 pl-4 text-center text-white font-extrabold rounded-l-3xl">
                        {currentQuestion?.pointPrice} points
                    </div>
                </div>
                <div className="flex flex-col px-8 py-5 ">
                    <div className="font-extrabold text-lg">{currentQuestion?.content}</div>
                    {currentQuestion?.answers.map(({ id, content, correct }) => (
                        <Radio
                            key={id}
                            onChange={(e) => setChosenAnswer(+e.target.value)}
                            label={content}
                            checked={chosenAnswer === id}
                            value={id}
                            name="answer"
                            error={correct === false}
                            disabled={currentQuestion.checked}
                        />
                    ))}
                    <div className="flex gap-2 mt-5 justify-end">
                        <Tooltip content="Skipping costs 1 point">
                            <Button className="bg-red-500 hover:bg-red-700" onClick={() => dispatch(skipQuestion())}>
                                Skip
                            </Button>
                        </Tooltip>
                        {!currentQuestion?.checked ? (
                            <Button
                                className="bg-green-600 hover:bg-green-700"
                                onClick={onSubmitAnswer}
                                disabled={!chosenAnswer}
                            >
                                Submit
                            </Button>
                        ) : (
                            <Button
                                className="bg-blue-500 hover:bg-blue-700"
                                onClick={() => dispatch(getCurrentQuestion())}
                            >
                                Next
                            </Button>
                        )}
                        {/* <Button className="bg-green-500 hover:bg-green-600">Finish</Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

FightPage.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default withAuth(FightPage);
