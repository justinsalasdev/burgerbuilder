import React from 'react';
import './sidedrawer.scss';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';

const SideDrawer = (props ) => {

    const {open,closed,isAuthenticated} = props;

    return(
        <>
            <Backdrop show={open} clicked={closed}/>
            <div className={open? 'sidedrawer--open' : 'sidedrawer--close'}>
                <nav>
                    <NavigationItems side isAuthenticated={isAuthenticated} sideDrawerClose={closed}/> 
                </nav>
            </div>
        </>
    );
}


export default SideDrawer;