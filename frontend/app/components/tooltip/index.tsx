import { FC } from 'react';

interface Props {
    content: React.ReactNode;
}

export const Tooltip: FC<Props> = ({ children, content }) => {
    return (
        <div className="group relative">
            <span className="hidden group-hover:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-30 bg-slate-200 py-1 px-2 min-w-max rounded-lg shadow-2xl">
                {content}
            </span>
            {children}
        </div>
    );
};
