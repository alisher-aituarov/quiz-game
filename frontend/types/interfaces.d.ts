enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
}
interface Answer {
    id: number;
    content: string;
    correct: boolean;
}

interface User {
    id: number;
    name: string;
    email: string;
    score: number;
    role: Roles;
}
