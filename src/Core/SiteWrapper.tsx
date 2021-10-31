import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Router from './Router/Router';
import Routes from './Router/Routes';
import Sidebar from './Sidebar';

const SiteWrapper = () : JSX.Element => {


    return <div>
            <Header />
            <Sidebar />
            <Router routes={Routes}/>
            <Footer />
        </div>
}

export default SiteWrapper;