import { ChangeEvent, FC } from 'react';

interface Props extends React.ComponentProps<'input'> {
    label?: string;
}

export const Checkbox: FC<Props> = ({ onChange, label, checked }) => {
    return (
        <div className="my-1 flex items-center">
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    onChange={onChange}
                    className="form-checkbox h-7 w-7 text-green-600 rounded-md"
                    checked={checked}
                />
                <span className="ml-2 text-gray-700">{label}</span>
            </label>
        </div>
    );
};
