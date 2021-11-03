import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Router from './Router/Router';
import Sidebar from './Sidebar';

const SiteWrapper = () : JSX.Element => {

    //TODO: Create a container component for the router screen
    return <BrowserRouter>
            <Header />
            <Sidebar />
            <div style={{height: '80vh', marginTop: '10vh'}}>
                <Router />
            </div>
            <Footer />
        </BrowserRouter>
}

export default SiteWrapper;