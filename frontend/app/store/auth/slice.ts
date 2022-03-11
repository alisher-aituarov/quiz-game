import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, RegisterPayload } from '../../types';
import { AuthState } from '../types';

export const initialState: AuthState = {
    userData: null,
    authenticated: false,
    error: '',
    loading: false,
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<LoginPayload>) => {
            state.loading = true;
            state.error = '';
        },
        loginSuccess: (state, { payload }: PayloadAction<User>) => {
            state.userData = payload;
            state.authenticated = true;
            state.loading = false;
            state.error = '';
        },
        loginError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
            state.authenticated = false;
            state.loading = false;
        },
        register: (state, { payload }: PayloadAction<RegisterPayload>) => {
            state.loading = true;
            state.error = '';
        },
        registerError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
            state.loading = false;
        },
    },
});

export const { login, loginSuccess, loginError, register, registerError } = authSlice.actions;

export default authSlice.reducer;
