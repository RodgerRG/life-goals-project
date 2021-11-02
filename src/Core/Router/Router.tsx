import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { setCurrentRoute, setRoutes } from '../../Redux/Slices/siteSlice';
import { RootState } from '../../Redux/Stores/store';
import BuildRoute, { RouteProps } from './Route';
import { RouteModel } from './Routes';

export interface RouterProps {
    routes: RouteProps[]
}

const Router = (props: RouterProps) => {
    const routes = useSelector((state : RootState) => state.SiteReducer.routes);

    return <BrowserRouter>
            <Switch>
                {routes.map(route => route)}
            </Switch>
        </BrowserRouter>
}

const BuildRouteListItem = (route: RouteModel) : JSX.Element => {
    return <ListItem key={route.endpoint}>
        <ListItemIcon>
            {route.icon}
        </ListItemIcon>
        <ListItemText>
            {route.name}
        </ListItemText>
    </ListItem>
}

export const BuildRouteList = (routes: RouteModel[]) : JSX.Element[] => {
    return routes.map(route => BuildRouteListItem(route));
}

export default Router;