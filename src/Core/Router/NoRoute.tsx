import React from 'react';
import { Route } from 'react-router';

export const NoRoute = () : JSX.Element => {
    return <Route path="*" component={NoRouteScreen} key={"noMatch"}/>
}

const NoRouteScreen = () : JSX.Element => {
    return <div>
            NO MATCHING ROUTE
        </div>
}

export default NoRouteScreen;