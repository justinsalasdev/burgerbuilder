import React from 'react';
import './toolbar.scss';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'; 
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = (props) => {

    return (
        <header className='toolbar'>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo tool/>
            <nav className='toolbar__nav'>
                <NavigationItems isAuthenticated={props.isAuthenticated}/>
            </nav>
        </header>
    )
}


export default toolbar;

