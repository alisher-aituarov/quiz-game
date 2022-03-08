import classNames from 'classnames';
import { FC } from 'react';

interface Props extends React.ComponentProps<'button'> {}

export const Button: FC<Props> = ({ children, className, type = 'button', onClick }) => {
    return (
        <button
            className={classNames(
                'rounded-md px-6 py-2 text-white font-bold transition-colors hover:shadow-lg active:shadow-none',
                className,
            )}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
