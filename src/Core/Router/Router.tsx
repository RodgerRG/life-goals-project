import { ListItem } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoRoute from './NoRoute';
import BuildRoute, { RouteProps } from './Route';

export interface RouterProps {
    routes: RouteProps[]
}

const Router = (props: RouterProps) => {
    return <BrowserRouter>
            <Switch>
                {props.routes.map(route => BuildRoute(route.name, route.endpoint, route.component))}
                <Route path="*" component={NoRoute}/>
            </Switch>
        </BrowserRouter>
}

const BuildRouteListItem = (route: RouteProps) : JSX.Element => {
    return <ListItem key={route.endpoint}>
        {route.name}
    </ListItem>
}

export const BuildRouteList = (routes: RouteProps[]) : JSX.Element[] => {
    return routes.map(route => BuildRouteListItem(route));
}

export default Router;