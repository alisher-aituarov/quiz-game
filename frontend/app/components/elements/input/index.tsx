import classNames from 'classnames';
import { FC } from 'react';

interface Props extends React.ComponentProps<'input'> {}

export const Input: FC<Props> = ({ placeholder, value, onChange, className }) => {
    return (
        <label className="flex">
            <input
                className={classNames(
                    'flex-auto bg-pink-200 py-2 px-3 rounded-md outline-none focus:shadow-lg hover:shadow-sm placeholder:text-red-400 transition-shadow text-red-900',
                    className,
                )}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>
    );
};
