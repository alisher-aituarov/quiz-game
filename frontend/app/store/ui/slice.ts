import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '../types';

export const initialState: UIState = {
    startModalOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state[`${action.payload}Open`] = !state[`${action.payload}Open`];
        },
    },
});

export const { toggleModal } = uiSlice.actions;

export default uiSlice.reducer;
