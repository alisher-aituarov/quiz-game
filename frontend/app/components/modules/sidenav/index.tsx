import Link from 'next/link';
import { FC } from 'react';

export const Sidenav: FC = () => {
    return (
        <nav className="flex flex-col">
            <Link href="/">
                <a className="p-1 my-2 rounded-md hover:shadow-inner hover:bg-blue-200">Questions</a>
            </Link>
            <Link href="/">
                <a className="p-1 my-2 rounded-md hover:shadow-inner hover:bg-blue-200">Users</a>
            </Link>
            <Link href="/">
                <a className="p-1 my-2 rounded-md hover:shadow-inner hover:bg-blue-200">Quizzes</a>
            </Link>
        </nav>
    );
};
