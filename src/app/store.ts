import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currentScoreReducers } from '../feature/predict/components/currentScoreSlice';
import { currentPriceReducers } from '../feature/predict/components/btcPriceSlice';

const rootReducer = combineReducers({
    score: currentScoreReducers,
    price: currentPriceReducers,
});

export function createStore(preloadedState?: Partial<AppState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export const store = createStore();

export type AppState = ReturnType<typeof rootReducer>;
