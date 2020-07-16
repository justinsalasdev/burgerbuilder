import React, {useState} from 'react';
import './layout.scss';
import '../../recycle/Scrollbar/scrollbar.scss'
import Toolbar from '../Toolbar/Toolbar'; 
import SideDrawer from '../SideDrawer/SideDrawer';
import {useSelector} from 'react-redux';

const Layout = props => {
    const {children} = props;
    const isAuthenticated = useSelector(state => state.login.idToken !== null)
    const [sideDrawerOpen, showSideDrawer] = useState(false)

    const closeSideDrawer = () => {
        showSideDrawer(false)
    }

    const toggleSideDrawer = () => {
        showSideDrawer(!sideDrawerOpen)
    }

    return(
        <>
            <Toolbar toggleSideDrawer={toggleSideDrawer} isAuthenticated={isAuthenticated}/>
            <SideDrawer isAuthenticated={isAuthenticated} sideDrawerOpen={sideDrawerOpen} closeSideDrawer={closeSideDrawer}/>
            <main className='main'>
                {children}
            </main>
        </>

    )

}

export default Layout;