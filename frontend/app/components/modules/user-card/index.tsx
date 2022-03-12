import Image from 'next/image';
import { FC } from 'react';
import { UploadIcon } from '../../../icons/upload.icon';
import { useAppSelector } from '../../../store/hooks';

import person from '/public/images/person.jpg';

export const UserCard: FC = () => {
    const { userData } = useAppSelector((state) => state.user);

    return (
        <div className="flex flex-col justify-center items-center py-5 px-2 md:py-10 md:px-5 text-gray-600">
            <div className="h-64 w-64 relative grow mb-3 rounded-full hover:rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out shadow-lg">
                <Image alt="Avatar" src={person} width={150} height={150} layout="fill" objectFit="cover" />
                <div className="w-full h-10 bg-gray-300 absolute bottom-0 opacity-60 flex justify-center items-center cursor-pointer hover:bg-gray-400">
                    <UploadIcon />
                </div>
            </div>
            <div className="text-2xl">{userData?.name}</div>
            <div className="text-md">Last quiz was played 2 days ago</div>
            <div className="text-md">In 20 completed quiz you have earned 200 points</div>
        </div>
    );
};
