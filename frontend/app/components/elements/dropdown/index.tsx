import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

interface Props {
    label: string;
    options: TOption[];
    primary?: boolean;
}

export type TOption = {
    name?: string;
    value: number;
};

export const Dropdown: FC<Props> = ({ label, options, primary }) => {
    return (
        <Menu as="div" className={classNames('relative inline-block text-left', { 'w-full h-full': primary })}>
            <Menu.Button
                className={classNames(
                    'inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500',
                    {
                        'h-full bg-gray-100 border-none rounded-sm outline-none focus:shadow-lg hover:shadow-sm text-gray-400 transition-shadow focus:ring-offset-0 focus:ring-0':
                            primary,
                    },
                )}
            >
                {label}
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right z-30 absolute right-1/2 translate-x-2/4 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map(({ name, value }) => (
                            <Menu.Item key={value}>
                                {({ active }) => (
                                    <span
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                        )}
                                    >
                                        {name || value}
                                    </span>
                                )}
                            </Menu.Item>
                        ))}
                        {!options?.length && (
                            <Menu.Item>
                                <span className={classNames('block px-4 py-2 text-sm')}>Empty</span>
                            </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
