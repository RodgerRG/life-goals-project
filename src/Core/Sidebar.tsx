import { List, SwipeableDrawer } from '@material-ui/core';
import { BuildRouteList } from './Router/Router';
import Routes from './Router/Routes';

const Sidebar = () : JSX.Element => {
    return <SwipeableDrawer onClose={() => {}} onOpen={() => {}} open>
        <List>
            {BuildRouteList(Routes)}
        </List>
    </SwipeableDrawer>
}

export default Sidebar;