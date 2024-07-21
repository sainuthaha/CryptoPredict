import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Price } from '../../../models/price';

const initialState: Price = {
    bitcoin: {
        usd: 0
    }
};

const currentPriceSlice = createSlice({
    name: 'currentPriceSlice',
    initialState,
    reducers: {
        setCurrentPrice: (state, action: PayloadAction<Price | undefined>) => {
            return { ...state, ...action.payload };
        }
    },
});

export const currentPriceActions = currentPriceSlice.actions;
export const currentPriceReducers = currentPriceSlice.reducer;
