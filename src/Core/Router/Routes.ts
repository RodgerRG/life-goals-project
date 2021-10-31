import HomeScreen from '../../Home/HomeScreen';
import { RouteProps } from './Route';

const Routes : RouteProps[] = [
    {
        name: 'Home',
        endpoint: '/',
        component: HomeScreen
    }
]

export default Routes;