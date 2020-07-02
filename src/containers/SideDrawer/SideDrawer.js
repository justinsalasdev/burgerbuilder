import React from 'react';
import './sidedrawer.scss';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';

const SideDrawer = (props ) => {

    const {
        sideDrawerOpen,
        closeSideDrawer,
        isAuthenticated} = props;

    return(
        <>
            {sideDrawerOpen?<Backdrop clicked={closeSideDrawer}/>:null}
            <div className={sideDrawerOpen? 'sidedrawer--open' : 'sidedrawer--close'}>
                <nav>
                    <NavigationItems side isAuthenticated={isAuthenticated} closeSideDrawer={closeSideDrawer}/> 
                </nav>
            </div>
        </>
    );
}


export default SideDrawer;