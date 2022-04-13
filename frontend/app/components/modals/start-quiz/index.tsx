import { FC, useMemo, useState } from 'react';
import { difficultyService } from '../../../api/difficultyService';
import { genresService } from '../../../api/genreService';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { startQuiz } from '../../../store/quiz/slice';
import { Dropdown } from '../../elements/dropdown';
import { BaseModal } from '../base';

interface Props {
    open: boolean;
    onClose: () => void;
}

export const StartQuizModal: FC<Props> = ({ open, onClose }) => {
    const [{ amount, genre, difficulty }, setSettings] = useState<{
        genre: number | null;
        difficulty: number | null;
        amount: number | null;
    }>({
        genre: null,
        difficulty: null,
        amount: null,
    });
    const { error } = useAppSelector((state) => state.quiz);
    const dispatch = useAppDispatch();

    /**
     * Create select options 10, 15, 20, 25, 30
     */
    const amountOptions = useMemo(
        () =>
            Array.from(Array(35).keys())
                .filter((k: number) => k % 5 === 0 && k >= 10)
                .map((k) => ({ name: k.toString(), value: k })),
        [],
    );

    const genresFetcher = () =>
        genresService
            .read()
            .then(({ data }) => data.map((d) => ({ ...d, value: d.id })))
            .catch((err) => err);

    const difficultyFetcher = () =>
        difficultyService
            .read()
            .then(({ data }) => data.map((d) => ({ ...d, value: d.id })))
            .catch((err) => err);

    const onSettingsChange = ({ name, value }: { name: string; value: number }) => {
        setSettings((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onQuizStart = async () => {
        if (!(difficulty && genre && amount)) {
            return null;
        }
        dispatch(startQuiz({ amount, genreId: genre, difficultyId: difficulty }));
    };

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Configure your quiz"
            acceptLabel="Go"
            rejectLabel="Cancel"
            onAccept={onQuizStart}
            onReject={onQuizStart}
        >
            <div className="flex-col flex sm:flex-row gap-2">
                <Dropdown
                    label="Difficulty"
                    name="difficulty"
                    value={difficulty}
                    onChange={onSettingsChange}
                    asyncFetcher={difficultyFetcher}
                />
                <Dropdown
                    label="Genre"
                    name="genre"
                    value={genre}
                    asyncFetcher={genresFetcher}
                    onChange={onSettingsChange}
                />
                <Dropdown
                    label="Amount"
                    name="amount"
                    value={amount}
                    options={amountOptions}
                    onChange={onSettingsChange}
                />
            </div>
            {error && <div className="text-red-500 my-2 mx-1">{error}</div>}
        </BaseModal>
    );
};
