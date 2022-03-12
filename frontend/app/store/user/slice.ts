import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types';

export const initialState: UserState = {
    userData: null,
    error: '',
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadMe: (state) => {
            state.loading = true;
            state.error = '';
        },
        loadMeSuccess: (state, { payload }: PayloadAction<User>) => {
            state.loading = false;
            state.error = '';
            state.userData = payload;
        },
        loadMeError: (state, { payload }: PayloadAction<string>) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export const { loadMe, loadMeSuccess, loadMeError } = userSlice.actions;

export default userSlice.reducer;
