import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants/storage-keys';
import { LoginPayload, RegisterPayload } from '../../types';
import { LocalStorage } from '../../utils/local-storage';
import { AuthState } from '../types';

export const initialState: AuthState = {
    authenticated: !!LocalStorage.get(STORAGE_KEYS.accessToken),
    error: '',
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<LoginPayload>) => {
            state.loading = true;
            state.error = '';
        },
        loginSuccess: (state) => {
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
