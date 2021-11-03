import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoRoute } from '../../Core/Router/NoRoute';

export interface SiteState {
    currentRoute: JSX.Element,
    sidebarOpen: boolean
}

const initialState : SiteState = {
    currentRoute: NoRoute(),
    sidebarOpen: false
}

export const SiteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {
        setCurrentRoute: (state, action: PayloadAction<JSX.Element>) => {
            state.currentRoute = action.payload;
        },
        toggleSidebarOpen: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        }
    }
});

export const { setCurrentRoute, toggleSidebarOpen } = SiteSlice.actions;

export default SiteSlice.reducer;