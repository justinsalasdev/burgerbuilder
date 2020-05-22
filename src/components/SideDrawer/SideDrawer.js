import React from 'react';
import _ from './SideDrawer.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../containers/Wrapper/Wrapper';

const sideDrawer = (props ) => {
    let attachedClasses = [_.SideDrawer, _.Close ];

    if(props.open){
        attachedClasses = [_.SideDrawer, _.Open ];
    }

    return(
        <Wrapper>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo side/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Wrapper>
    );
}


export default sideDrawer;