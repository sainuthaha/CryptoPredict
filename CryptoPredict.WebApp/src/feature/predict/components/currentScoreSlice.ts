import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserScoreData } from '../../../models/score';

const initialState: UserScoreData = {
    userId: "",
    score: 0,
    guessTime: null,
    guessPrice: 0,
};

const currentScoreSlice = createSlice({
    name: 'currentScoreSlice',
    initialState,
    reducers: {
        setCurrentScore: (state, action: PayloadAction<number>) => {
            return { ...state, score: action.payload };
        },

        setScore: (state, action: PayloadAction<UserScoreData | undefined>) => {
            return { ...state, ...action.payload };
        },

        setGuessTime: (state, action: PayloadAction<string | null>) => {
            return { ...state, guessTime: action.payload };
        },

        setGuessPrice: (state, action: PayloadAction<number>) => {
            return { ...state, guessPrice: action.payload };
        }
        
    },
});

export const currentScoreActions = currentScoreSlice.actions;
export const currentScoreReducers = currentScoreSlice.reducer;
