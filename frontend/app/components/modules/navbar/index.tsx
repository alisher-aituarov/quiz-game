import Link from 'next/link';
import { FC } from 'react';
import { Container } from '../../container';
import { Button } from '../../elements/button';

export const NavbarComponent: FC = () => {
    const auth = false;
    return (
        <div className="bg-orange-400">
            <Container>
                <div className="py-2 flex justify-end gap-2 items-center">
                    <Link href="/auth/sign-in" passHref>
                        <Button className="bg-red-500 hover:bg-red-700 py-1.5">Sign In</Button>
                    </Link>
                    <Link href="/auth/sign-up" passHref>
                        <Button className="bg-blue-500 hover:bg-blue-700 py-2">Sign Up</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};
