import Link from 'next/link';
import { FC } from 'react';
import { Container } from '../../container';
import { Button } from '../../elements/button';

export const Navbar: FC = () => {
    const auth = false;
    return (
        <div className="bg-gray-50 shadow-sm">
            <Container>
                <div className="py-2 flex gap-2 items-center">
                    <Link href="/">
                        <a className="mr-auto text-2xl font-bold text-blue-400">QuizX</a>
                    </Link>
                    <Link href="/auth/sign-in" passHref>
                        <Button className="bg-red-600 hover:bg-red-700 py-1.5">Sign In</Button>
                    </Link>
                    <Link href="/auth/sign-up" passHref>
                        <Button className="bg-blue-500 hover:bg-blue-700 py-2">Sign Up</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};
