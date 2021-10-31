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

export default Router;