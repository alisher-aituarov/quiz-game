enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
}
interface Answer {
    id: number;
    content: string;
    correct: boolean;
}

interface Quiz {
    id: number;
    user: User;
    startTime: Date;
    endTime: Date;
    genre: Genre;
    difficulty: Difficulty;
    amount: number;
    points: number;
}

interface Genre {
    id: number;
    name: string;
}

interface Difficulty {
    id: number;
    name: string;
}

interface User {
    id: number;
    avatar: string;
    name: string;
    email: string;
    score: number;
    role: Roles;
}

interface Quiz {
    id: number;
    userId: number;
    startTime: Date;
    endTime: Date;
    genre: Genre;
    difficulty: Difficulty;
    amount: number;
    current: number;
    questions: number[];
    points: number;
}

interface Question {
    id: number;
    createdAt: Date;
    content: string;
    pointPrice: number;
    active: boolean;
    rating: number;
    approved: boolean;
    difficulty: Difficulty;
    genre: Genre;
    answers: Answer[];
}

interface StorageService {
    get: (a: string) => ?any;
    set: (a: string, b: any) => void;
    delete: (a: string) => void;
}
