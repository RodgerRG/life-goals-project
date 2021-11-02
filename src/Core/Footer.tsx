import { AppBar, Toolbar } from '@mui/material';
import React from 'react';


const Footer = () : JSX.Element => {
    return <AppBar sx={
        {
            position: 'fixed',
            color: 'primary',
            top: 'auto',
            bottom: 0
        }
    }>
        <Toolbar>
        </Toolbar>
    </AppBar>
}

export default Footer;