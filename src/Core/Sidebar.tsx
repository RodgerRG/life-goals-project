import { SwipeableDrawer } from '@material-ui/core';
import Router from './Router/Router';
import Routes from './Router/Routes';

const Sidebar = () : JSX.Element => {
    return <SwipeableDrawer onClose={() => {}} onOpen={() => {}} open>
        <Router routes={Routes}/>
    </SwipeableDrawer>
}

export default Sidebar;