import React from 'react';
import { Route } from 'react-router-dom';

export interface RouteProps {
    endpoint: string,
    component: () => JSX.Element
}

export const SiteRoute = (props : RouteProps) : JSX.Element => {
    return <Route path={props.endpoint} component={props.component} key={props.endpoint}/>
}

const BuildRoute = (endpoint: string, component: () => JSX.Element) : JSX.Element => {
    return SiteRoute({endpoint, component});
}

export default BuildRoute;