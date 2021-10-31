import React from 'react';
import { Route } from 'react-router-dom';

export interface RouteProps {
    name: string,
    endpoint: string,
    component: () => JSX.Element
}

export const SiteRoute = (props : RouteProps) : JSX.Element => {
    return <Route path={props.endpoint} component={props.component} />
}

const BuildRoute = (name : string, endpoint: string, component: () => JSX.Element) : JSX.Element => {
    return SiteRoute({name, endpoint, component});
}

export default BuildRoute;