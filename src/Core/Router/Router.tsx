import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { Switch, useHistory } from 'react-router-dom';
import { RootState } from '../../Redux/Stores/store';
import { RouteProps } from './Route';
import { RouteModel } from './Routes';

export interface RouterProps {
    routes: RouteProps[]
}

const Router = () => {
    const routes = useSelector((state : RootState) => state.SiteReducer.routes);

    return  <Switch>
                {routes.map(route => route)}
            </Switch>
}

const BuildRouteListItem = (route: RouteModel) : JSX.Element => {
    const history = useHistory();
    const changeRoute = () => {
        history.push(route.endpoint);
    }
    return <ListItemButton sx={
        {
            width: '12vw',
            minWidth: '280px',
            maxWidth: '300px'
        }
    } key={route.endpoint} onClick={() => changeRoute()}>
        <ListItemIcon sx={
            {
                width: '20%',
                padding: '5%'
            }
        }>
            {route.icon}
        </ListItemIcon>
        <ListItemText sx={
            {
                width: '75%',
                textAlign: 'left'
            }
        }>
            {route.name}
        </ListItemText>
    </ListItemButton>
}

export const BuildRouteList = (routes: RouteModel[]) : JSX.Element[] => {
    return routes.map(route => BuildRouteListItem(route));
}

export default Router;