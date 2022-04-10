import Image from 'next/image';
import { FC } from 'react';
import { CupIcon } from '../../../icons/cup.icon';

interface Props {
    data: Omit<User, 'role'>;
    place: number;
}

const CUP_COLORS: { [key: number]: string } = {
    1: 'gold',
    2: 'silver',
    3: '#CD7F32',
};

export const RatingCard: FC<Props> = ({ data, place }) => {
    return (
        <div className="flex items-center shadow-md rounded-2xl my-1 gap-5 overflow-hidden pl-3">
            <div className="h-16 w-16 relative flex items-center justify-center bg-blue-100 rounded-2xl shadow-lg overflow-hidden">
                {data.avatar ? (
                    <Image
                        alt="Avatar"
                        src={process.env.NEXT_PUBLIC_BASE_API_URL + data.avatar}
                        layout="fill"
                        objectFit="cover"
                    />
                ) : (
                    <div>{data.name.charAt(0).toUpperCase()}</div>
                )}
            </div>
            <div className="grow py-5">
                <div>{data.name}</div>
                <div>
                    <span className="text-red-500">{data.score}</span> points
                </div>
            </div>
            <div className="bg-green-100 w-12 h-24 self-stretch p-1.5 px-2 flex flex-col justify-center items-center">
                {place < 4 && <CupIcon color={CUP_COLORS[place]} />}
                <span className="p-1 text-lg text-blue-900">{place}</span>
            </div>
        </div>
    );
};
