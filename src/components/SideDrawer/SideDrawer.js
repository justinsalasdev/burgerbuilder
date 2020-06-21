import React from 'react';
import './sidedrawer.scss';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../containers/Wrapper/Wrapper';

const sideDrawer = (props ) => {
    return(
        <Wrapper>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={props.open? 'sidedrawer sidedrawer--open' : 'sidedrawer sidedrawer--close'}>
                <nav>
                    <NavigationItems side isAuthenticated={props.isAuthenticated} sideDrawerClose={props.closed}/> 
                </nav>
            </div>
        </Wrapper>
    );
}


export default sideDrawer;