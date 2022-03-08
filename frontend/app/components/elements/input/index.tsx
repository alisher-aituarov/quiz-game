import classNames from 'classnames';
import { FC } from 'react';

interface Props extends React.ComponentProps<'input'> {}

export const Input: FC<Props> = ({ placeholder, value, onChange, className }) => {
    return (
        <label className="flex">
            <input
                className={classNames(
                    'flex-auto bg-gray-100 py-4 px-5 rounded-sm outline-none focus:shadow-lg hover:shadow-sm placeholder:text-gray-400 transition-shadow text-red-900',
                    className,
                )}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>
    );
};
