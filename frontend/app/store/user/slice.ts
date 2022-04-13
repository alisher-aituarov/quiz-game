import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types';

export const initialState: UserState = {
    userData: null,
    error: '',
    loading: false,
    globalRating: [],
    loadingRating: false,
    loadingRatingError: '',
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
        loadGlobalRating: (state) => {
            state.loadingRating = true;
            state.loadingRatingError = '';
        },
        loadGlobalRatingSuccess: (state, { payload }) => {
            state.loadingRating = false;
            state.loadingRatingError = '';
            state.globalRating = payload;
        },
        loadGlobalRatingError: (state, { payload }) => {
            state.loadingRating = false;
            state.loadingRatingError = payload;
        },
    },
});

export const { loadMe, loadMeSuccess, loadMeError, loadGlobalRating, loadGlobalRatingError, loadGlobalRatingSuccess } =
    userSlice.actions;

export default userSlice.reducer;
