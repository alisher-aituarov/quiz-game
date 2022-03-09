import classNames from 'classnames';
import { FC } from 'react';
import { Container } from '../../container';
import { Bottom } from '../../modules/bottom';
import { Navbar } from '../../modules/navbar';
import { Sidenav } from '../../modules/sidenav';

interface Props {
    className: string;
}

export const AdminLayout: FC<Props> = ({ children, className }) => {
    return (
        <div className={classNames('h-full flex flex-col w-100', className)}>
            <Navbar />
            <Container>
                <div className="flex gap-4">
                    <div className="w-1/6">
                        <Sidenav />
                    </div>
                    <div className="w-5/6">{children}</div>
                </div>
            </Container>
            <Bottom />
        </div>
    );
};
