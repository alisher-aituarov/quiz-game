import classNames from 'classnames';
import { FC } from 'react';

interface Props extends React.ComponentProps<'button'> {
    loading?: boolean;
}

export const Button: FC<Props> = ({ children, className, type = 'button', onClick, loading, disabled }) => {
    return (
        <button
            className={classNames(
                'rounded-md px-6 py-2 text-white font-bold transition-colors overflow-hidden active:shadow-none relative before:content-[""] before:block before:absolute before:left-0 before:top-0 hover:before:content-[""] before:w-full before:h-full before:bg-pink-700 before:z-10 ',
                { 'hover:shadow-lg': !loading },
                { 'before:hidden': !loading },
                { 'before:animate-[slide_1s_ease-in-out_infinite]': loading },
                { 'bg-gray-400 pointer-events-none': disabled },
                className,
            )}
            onClick={!disabled ? onClick : () => null}
            type={type}
        >
            {children}
        </button>
    );
};
