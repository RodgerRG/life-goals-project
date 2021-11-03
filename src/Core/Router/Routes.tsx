import HomeScreen from '../../Home/HomeScreen';
import FinanceScreen from '../../Finance/FinanceScreen';
import { RouteProps } from './Route';
import { AttachMoney, Home } from '@mui/icons-material';

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
    },
    {
        name: 'Cash Money',
        endpoint: '/finances',
        component: FinanceScreen,
        icon: <AttachMoney />
    }
]

export default Routes;