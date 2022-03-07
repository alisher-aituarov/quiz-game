import { FC } from 'react';
import { Container } from '../container';
import { Bottom } from '../modules/bottom';
import { Navbar } from '../modules/navbar';

export const Layout: FC = ({ children }) => {
    return (
        <div className="h-full flex flex-col w-100">
            <Navbar />
            <Container>{children}</Container>
            <Bottom />
        </div>
    );
};
