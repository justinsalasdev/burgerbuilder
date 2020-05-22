import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../containers/Wrapper/Wrapper';

const sideDrawer = (props ) => {
    return(
        <Wrapper>
            <Backdrop show/>
            <div className={classes.SideDrawer}>
                <Logo side/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Wrapper>
    );
}


export default sideDrawer;