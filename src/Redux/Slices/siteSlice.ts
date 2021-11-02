import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoRoute } from '../../Core/Router/NoRoute';

export interface SiteState {
    routes: JSX.Element[],
    currentRoute: JSX.Element,
    sidebarOpen: boolean
}

const initialState : SiteState = {
    routes: [],
    currentRoute: NoRoute(),
    sidebarOpen: false
}

export const SiteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {
        setRoutes: (state, action: PayloadAction<JSX.Element[]>) => {
            state.routes = action.payload;
        },
        setCurrentRoute: (state, action: PayloadAction<JSX.Element>) => {
            state.currentRoute = action.payload;
        },
        toggleSidebarOpen: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        }
    }
});

export const { setRoutes, setCurrentRoute, toggleSidebarOpen } = SiteSlice.actions;

export default SiteSlice.reducer;