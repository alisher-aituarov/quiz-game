import classNames from 'classnames';
import { ChangeEvent, FC } from 'react';

interface Props extends React.ComponentProps<'textarea'> {}

export const Textarea: FC<Props> = ({ placeholder, value, onChange, className, cols }) => {
    return (
        <label className="flex">
            <textarea
                cols={cols}
                className={classNames(
                    'flex-auto bg-gray-100 py-4 px-5 border-none focus:ring-0 rounded-sm outline-none focus:shadow-lg hover:shadow-sm placeholder:text-gray-400 transition-shadow text-red-900',
                    className,
                )}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>
    );
};
