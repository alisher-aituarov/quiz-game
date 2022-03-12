export interface RootState {
    auth: AuthState;
}

export interface AuthState {
    authenticated: boolean;
    loading: boolean;
    error: string;
}

export interface UserState {
    userData: User | null;
    loading: boolean;
    error: string;
}

export interface UIState {
    startModalOpen: boolean;
}

export interface QuizState {
    runningQuiz: Quiz | null;
    loading: boolean;
    error: string;
}

export interface QuestionState {
    currentQuestion: (Question & { checked: boolean }) | null;
    loading: boolean;
    error: string;
    verifying: boolean;
}
