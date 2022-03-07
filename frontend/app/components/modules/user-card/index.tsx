import Image from 'next/image';
import { FC } from 'react';

import person from '/public/images/person.jpg';

export const UserCard: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center py-5 px-2 md:py-10 md:px-5 text-gray-600">
            <div className="h-64 w-64 relative grow mb-3">
                <Image
                    alt="Avatar"
                    src={person}
                    width={150}
                    height={150}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full hover:rounded-3xl transition-all duration-1000 ease-in-out shadow-lg"
                />
            </div>
            <div className="text-2xl">Cassie White</div>
            <div className="text-md">Last quiz was played 2 days ago</div>
            <div className="text-md">In 20 completed quiz you have earned 200 points</div>
        </div>
    );
};
