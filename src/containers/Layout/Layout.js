import React, {useState} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.module.css';
import Toolbar from '../../components/Toolbar/Toolbar'; 
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import {useSelector} from 'react-redux';

const Layout = props => {
    const isAuthenticated = useSelector(state => state.authenticate.token !== null)
    const [sideDrawerShown, showSideDrawer] = useState(false)

    const closeSideDrawer = () => {
        showSideDrawer(false)
    }

    const toggleSideDrawer = () => {
        showSideDrawer(!sideDrawerShown)
    }

    return(
        <Wrapper>
            <Toolbar 
                drawerToggleClicked={toggleSideDrawer}
                isAuthenticated={isAuthenticated}/>
            <SideDrawer 
                isAuthenticated={isAuthenticated}
                open={sideDrawerShown} 
                closed={closeSideDrawer}/>
            <main className={classes.main}>
            {props.children}
            </main>
        </Wrapper>

    )

}



export default Layout;