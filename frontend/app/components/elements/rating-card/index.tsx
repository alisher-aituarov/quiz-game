import Image from 'next/image';
import { FC } from 'react';
import { CupIcon } from '../../../icons/cup.icon';

import person from '/public/images/person.jpg';

export const RatingCard: FC = () => {
    return (
        <div className="flex items-center shadow-md rounded-2xl my-1 gap-5 overflow-hidden pl-3">
            <div className="h-16 w-16 relative">
                <Image
                    alt="Avatar"
                    src={person}
                    width={50}
                    height={50}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full shadow-lg"
                />
            </div>
            <div className="grow py-5">
                <div>Cassie Jones</div>
                <div>
                    <span className="text-red-500">123</span> points
                </div>
            </div>
            <div className="bg-green-100 w-12 h-24 self-stretch p-1.5 px-2 flex flex-col justify-center items-center">
                <CupIcon />
                <span className="p-1 text-lg text-blue-900">1</span>
            </div>
        </div>
    );
};
