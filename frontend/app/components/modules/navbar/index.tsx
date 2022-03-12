import Link from 'next/link';
import { FC } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Container } from '../../container';
import { Button } from '../../elements/button';

export const Navbar: FC = () => {
    const { authenticated } = useAppSelector((state) => state.auth);
    const unauthorizedNavbar = (
        <>
            <Link href="/auth/sign-in" passHref>
                <Button className="bg-red-600 hover:bg-red-700 py-1.5">Sign In</Button>
            </Link>
            <Link href="/auth/sign-up" passHref>
                <Button className="bg-blue-500 hover:bg-blue-700 py-2">Sign Up</Button>
            </Link>
        </>
    );
    const authorizedNavbar = <Button className="bg-red-500 hover:bg-red-700 py-1 px-2">Sign Out</Button>;
    return (
        <div className="bg-gray-50 shadow-sm">
            <Container>
                <div className="py-2 flex gap-2 items-center h-16">
                    <Link href="/">
                        <a className="mr-auto text-2xl font-bold text-blue-400">QuizX</a>
                    </Link>
                    {authenticated ? authorizedNavbar : unauthorizedNavbar}
                </div>
            </Container>
        </div>
    );
};
