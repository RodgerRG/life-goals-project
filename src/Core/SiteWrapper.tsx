import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setRoutes, setCurrentRoute } from '../Redux/Slices/siteSlice';
import Footer from './Footer';
import Header from './Header';
import BuildRoute from './Router/Route';
import Router from './Router/Router';
import Routes from './Router/Routes';
import Sidebar from './Sidebar';

const SiteWrapper = () : JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        var routes = Routes.map(route => BuildRoute(route.endpoint, route.component));
        dispatch(setRoutes(routes));
        dispatch(setCurrentRoute(routes[0]));
    }, [dispatch]);

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