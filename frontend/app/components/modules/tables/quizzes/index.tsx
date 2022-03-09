import { FC } from 'react';
import { Checkbox } from '../../../elements/checkbox';

const people = [
    {
        id: 1,
        name: 'Jane Cooper some question long enegot question long enegot question long enegot',
        title: 'Regional Paradigm Technician',
        points: 3,
        department: 'Optimization',
        createdAt: '30/03/1998',
        genre: 'Geography',
        difficulty: 'Medium',
        rating: 123,
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        points: 3,
        department: 'Optimization',
        createdAt: '30/03/1998',
        genre: 'Geography',
        difficulty: 'Medium',
        rating: 123,
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        points: 3,
        department: 'Optimization',
        createdAt: '30/03/1998',
        genre: 'Geography',
        difficulty: 'Medium',
        rating: 123,
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        points: 3,
        department: 'Optimization',
        createdAt: '30/03/1998',
        genre: 'Geography',
        difficulty: 'Medium',
        rating: 123,
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
];

export const QuizzesTable: FC = () => {
    return (
        <div className="flex flex-col w-full my-2">
            <div className="overflow-x-hidden">
                <div className="py-2 align-middle inline-block min-w-full sm:px-1 lg:px-2">
                    <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        User
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Points
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Points
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Genre
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Difficulty
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Created at
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Ended at
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.id}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 text-ellipsis overflow-hidden w-40">
                                                {person.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.points}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.genre}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.difficulty}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.rating}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {person.createdAt}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {person.createdAt}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
