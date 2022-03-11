import { FC, useState } from 'react';
import { uuid } from 'uuidv4';

import { PlusIcon } from '../../../../icons/plus.icon';
import { generateRandom } from '../../../../utils/random-generator';
import { Checkbox } from '../../../elements/checkbox';
import { Dropdown } from '../../../elements/dropdown';
import { Input } from '../../../elements/input';
import { Textarea } from '../../../elements/textarea';

export const QuestionForm: FC = () => {
    const [answers, setAnswers] = useState<Answer[]>([]);

    const onAddAnswer = () => {
        setAnswers((prev) => [...prev, { id: generateRandom(), content: '', correct: false }]);
    };

    return (
        <div className="mt-3 sm:mt-0 py-4">
            <div className="md:grid md:grid-cols-5 md:gap-6 md:justify-items-center">
                <div className="mt-1 md:mt-0 md:col-start-2 md:col-span-3">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-12 sm:col-span-6">
                                        <Textarea placeholder="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <Input placeholder="Points" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <Dropdown label="Genre" options={[]} primary />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <Dropdown label="Genre" options={[]} primary />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <div className="text-center my-1 text-gray-400">Answers</div>
                                        <button
                                            type="button"
                                            onClick={onAddAnswer}
                                            className="flex justify-center items-center w-full py-3 active:shadow-inner transition-all duration-75 bg-gray-50 rounded-md cursor-pointer"
                                        >
                                            <PlusIcon color="#ff0000" />
                                        </button>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        {answers.map(({ id, content, correct }) => (
                                            <div key={id} className="flex items-center gap-2 my-4">
                                                <div className="w-full sm:w-5/6">
                                                    <Input />
                                                </div>
                                                <div className="sm:w-1/6">
                                                    <Checkbox label="Correct" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
