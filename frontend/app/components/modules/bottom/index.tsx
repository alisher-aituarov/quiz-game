import Link from 'next/link';
import { FC } from 'react';

export const Bottom: FC = () => {
    return (
        <div className="flex justify-center underline">
            <Link href="/">
                <a className="mx-4 my-4 hover:text-red-500">About author</a>
            </Link>
            <Link href="/">
                <a className="mx-4 my-4 hover:text-red-500">Project code</a>
            </Link>
            <Link href="/">
                <a className="mx-4 my-4 hover:text-red-500">Donate</a>
            </Link>
        </div>
    );
};
