import { configureStore } from '@reduxjs/toolkit';
import SiteReducer from '../Slices/siteSlice';

export const store = configureStore({
    reducer: {
        SiteReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;