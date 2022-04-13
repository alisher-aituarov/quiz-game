import { ChangeEvent, useState } from 'react';

export const useFileUpload = ({ fn, name }: { fn: (formData: FormData) => Promise<any>; name: string }) => {
    const [loading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const formData = new FormData();
            formData.append(name, e.target.files?.[0]);
            try {
                setIsLoading(true);
                fn(formData);
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        }
    };

    return {
        handleChange,
        loading,
    };
};
