import { List, SwipeableDrawer } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebarOpen } from '../Redux/Slices/siteSlice';
import { RootState } from '../Redux/Stores/store';
import { BuildRouteList } from './Router/Router';
import Routes from './Router/Routes';

const Sidebar = () : JSX.Element => {
    const open = useSelector((state: RootState) => state.SiteReducer.sidebarOpen);
    const dispatch = useDispatch();

    return <SwipeableDrawer sx={{
            width: 'fit-content',
            '& .MuiDrawer-paper': {
                width: 'fit-content',
                backgroundColor: '#fafafa',
            }
        }}
        onClose={() => {dispatch(toggleSidebarOpen())}} onOpen={() => {dispatch(toggleSidebarOpen())}} open={open}>
        <List>
            {BuildRouteList(Routes)}
        </List>
    </SwipeableDrawer>
}

export default Sidebar;