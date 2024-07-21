import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Score } from '../../../models/score';

const initialState: Score = {
    userId: "",
    score: 0
};

const currentScoreSlice = createSlice({
    name: 'currentScoreSlice',
    initialState,
    reducers: {
        setCurrentScore: (state, action: PayloadAction<number>) => {
            return { ...state, score: action.payload };
        },

        setScore: (state, action: PayloadAction<Score | undefined>) => {
            return { ...state, ...action.payload };
        }
    },
});

export const currentScoreActions = currentScoreSlice.actions;
export const currentScoreReducers = currentScoreSlice.reducer;
