import classNames from 'classnames';
import { FC } from 'react';
import { Container } from '../container';
import { Bottom } from '../modules/bottom';
import { Navbar } from '../modules/navbar';

interface Props {
    className?: string;
}

export const Layout: FC<Props> = ({ children, className }) => {
    return (
        <div className={classNames('h-full flex flex-col w-100', className)}>
            <Navbar />
            <Container>{children}</Container>
            <Bottom />
        </div>
    );
};
