import React from 'react';
import './sidedrawer.scss';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';

const sideDrawer = (props ) => {
    return(
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={props.open? 'sidedrawer sidedrawer--open' : 'sidedrawer sidedrawer--close'}>
                <nav>
                    <NavigationItems side isAuthenticated={props.isAuthenticated} sideDrawerClose={props.closed}/> 
                </nav>
            </div>
        </>
    );
}


export default sideDrawer;