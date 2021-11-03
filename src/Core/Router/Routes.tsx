import HomeScreen from '../../Home/HomeScreen';
import FinanceScreen from '../../Finance/FinanceScreen';
import { AttachMoney, Home } from '@mui/icons-material';

export interface SidebarItemProps {
    name: string,
    icon: JSX.Element
}

export interface RouteModel extends SidebarItemProps {
    endpoint: string,
    component: () => JSX.Element
}

const Routes : RouteModel[] = [
    {
        name: 'Cash Money',
        endpoint: '/finances',
        component: FinanceScreen,
        icon: <AttachMoney />
    },
    {
        name: 'Home',
        endpoint: '/home',
        component: HomeScreen,
        icon: <Home />
    },
]

export default Routes;