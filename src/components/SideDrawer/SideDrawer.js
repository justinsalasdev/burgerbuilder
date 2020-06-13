import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../containers/Wrapper/Wrapper';

const sideDrawer = (props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close ];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open ];
    }

    return(
        <Wrapper>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo side/>
                <nav>
                    <NavigationItems side isAuthenticated={props.isAuthenticated} sideDrawerClose={props.closed}/> 
                </nav>
            </div>
        </Wrapper>
    );
}


export default sideDrawer;