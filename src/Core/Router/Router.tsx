import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Routes, { RouteModel } from './Routes';

const Router = () => {
    return <Switch>
            {Routes.map(route => <Route path={route.endpoint} component={route.component} key={route.endpoint}/>)}
            <Redirect from={'/'} to={'/home'}></Redirect>
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