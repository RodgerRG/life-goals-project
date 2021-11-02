import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebarOpen } from '../Redux/Slices/siteSlice';

const Header = () : JSX.Element => {
    const dispatch = useDispatch();

    return <AppBar>
            <Toolbar>
                <IconButton onClick={() => dispatch(toggleSidebarOpen())}>
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
}

export default Header;