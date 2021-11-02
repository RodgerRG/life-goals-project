import HomeScreen from '../../Home/HomeScreen';
import { RouteProps } from './Route';
import { Home } from '@material-ui/icons';

export interface SidebarItemProps {
    name: string,
    icon: JSX.Element
}

export interface RouteModel extends RouteProps, SidebarItemProps {}

const Routes : RouteModel[] = [
    {
        name: 'Home',
        endpoint: '/',
        component: HomeScreen,
        icon: <Home />
    }
]

export default Routes;