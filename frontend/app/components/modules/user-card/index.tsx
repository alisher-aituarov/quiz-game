import Image from 'next/image';
import { ChangeEvent, FC } from 'react';
import { userService } from '../../../api/userService';
import { useFileUpload } from '../../../hooks/useFileUpload';
import { UploadIcon } from '../../../icons/upload.icon';
import { useAppSelector } from '../../../store/hooks';

export const UserCard: FC = () => {
    const { userData } = useAppSelector((state) => state.user);
    const { quiz } = useAppSelector((state) => state.quiz);

    const dayDiff = quiz
        ? Math.floor((new Date().valueOf() - new Date(quiz.endTime).valueOf()) / (1000 * 60 * 60 * 24))
        : 0;

    const { handleChange, loading } = useFileUpload({ fn: (d) => userService.uploadAvatar(d), name: 'avatar' });

    return (
        <div className="flex flex-col justify-center items-center py-5 px-2 md:py-10 md:px-5 text-gray-600">
            <div className="h-64 w-64 relative grow mb-3 rounded-full hover:rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out shadow-lg">
                {userData?.avatar && (
                    <Image
                        alt="Avatar"
                        src={process.env.NEXT_PUBLIC_BASE_API_URL + userData?.avatar}
                        layout="fill"
                        objectFit="cover"
                    />
                )}
                <label
                    htmlFor="avatar"
                    className="w-full h-10 bg-gray-300 absolute bottom-0 opacity-60 flex justify-center items-center cursor-pointer hover:bg-gray-400"
                >
                    <UploadIcon />
                    <input type="file" hidden id="avatar" onChange={handleChange} />
                </label>
            </div>
            <div className="text-2xl">{userData?.name}</div>
            {quiz && (
                <>
                    <div className="text-md">
                        Last quiz was played{' '}
                        {dayDiff < 1 ? 'within a day' : dayDiff !== 1 ? `${dayDiff} days` : `${dayDiff} day`} ago
                    </div>
                    <div className="text-md">
                        In last completed quiz you have {quiz.points > 0 ? 'earned' : 'lost'} {Math.abs(quiz.points)}{' '}
                        points
                    </div>
                </>
            )}
        </div>
    );
};
