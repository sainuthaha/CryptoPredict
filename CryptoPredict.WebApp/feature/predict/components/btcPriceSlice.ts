import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: number = 0;

const currentPriceSlice = createSlice({
    name: 'currentPriceSlice',
    initialState,
    reducers: {
        setCurrentPrice: (state, action: PayloadAction<number | undefined>) => {
            return action.payload !== undefined ? action.payload : state;
        }
    },
});

export const currentPriceActions = currentPriceSlice.actions;
export const currentPriceReducers = currentPriceSlice.reducer;
