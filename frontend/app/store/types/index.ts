export interface RootState {
    authState: AuthState;
}

export interface AuthState {
    userData: User | null;
    authenticated: boolean;
    loading: boolean;
    error: string;
}
