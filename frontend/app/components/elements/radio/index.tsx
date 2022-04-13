import classNames from 'classnames';
import { ChangeEvent, FC } from 'react';

interface Props extends React.ComponentProps<'input'> {
    label?: string;
    error?: boolean;
}

export const Radio: FC<Props> = ({ onChange, label, value, name, checked, error, disabled }) => {
    return (
        <div className="my-1 flex items-center">
            <label
                className={classNames(
                    'inline-flex items-center w-full rounded-md',
                    { 'bg-red-400': disabled && error },
                    { 'bg-green-400': disabled && !error },
                )}
            >
                <input
                    name={name}
                    type="radio"
                    onChange={onChange}
                    className={classNames('form-checkbox h-7 w-7 rounded-md')}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                />
                <span className="ml-2 text-gray-700">{label}</span>
            </label>
        </div>
    );
};
