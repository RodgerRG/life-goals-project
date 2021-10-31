import { AppBar, createStyles, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';

const MakeFooterStyle = makeStyles(createStyles({
    footer: {
        position: 'fixed',
        color: 'primary',
        top: 'auto',
        bottom: 0
    }
}));

const Footer = () : JSX.Element => {
    const style = MakeFooterStyle();

    return <AppBar className={style.footer}>
        <Toolbar>
        </Toolbar>
    </AppBar>
}

export default Footer;