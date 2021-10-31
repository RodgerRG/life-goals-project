import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const SiteWrapper = () : JSX.Element => {



    return <div>
            <Header />
            <Sidebar />
            <Footer />
        </div>
}

export default SiteWrapper;