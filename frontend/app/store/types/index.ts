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
    globalRating: Omit<User, 'role'>[];
    loadingRating: boolean;
    loadingRatingError: '';
}

export interface UIState {
    startModalOpen: boolean;
}

export interface QuizState {
    quiz: Quiz | null;
    running: boolean;
    loading: boolean;
    error: string;
}

export interface QuestionState {
    currentQuestion: (Question & { checked: boolean }) | null;
    loading: boolean;
    error: string;
    verifying: boolean;
}
