import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';


const navigationItems = (props) =>{

    let navClass = [];
    if(props.side){
        navClass = [classes.NavigationItems, classes.NavigationItems__side].join(' ');
    }else{
        navClass = [classes.NavigationItems]
    }

    return(
        <ul className={navClass}>
            <NavigationItem link='/'>
                Burger Builder
            </NavigationItem>

            <NavigationItem link="/orders">
                Orders
            </NavigationItem>

            <NavigationItem link={props.isAuthenticated ? '/logout' : '/auth'}>
                {props.isAuthenticated ? 'Logout': 'Login'}
            </NavigationItem>
        </ul>
    )
}



export default navigationItems;