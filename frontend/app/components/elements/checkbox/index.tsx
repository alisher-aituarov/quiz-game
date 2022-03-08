import { ChangeEvent, FC } from 'react';

interface Props {
    label: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = ({ onChange, label, checked }) => {
    return (
        <div className="mt-1">
            <label className="inline-flex items-center mt-3">
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
