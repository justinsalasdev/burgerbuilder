import React from 'react';
import './toolbar.scss';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'; 
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const Toolbar = (props) => {

    const {toggleSideDrawer} = props;

    return (
        <div className='toolbar'>
            <DrawerToggle toggleSideDrawer={toggleSideDrawer}/>
            <Logo/>
            <nav className='toolbar__nav'>
                <NavigationItems/>
            </nav>
        </div>
    )
}

export default Toolbar;

