import React from 'react';
import './navigationitems.scss'
import NavigationItem from '../NavigationItem/NavigationItem';


const navigationItems = (props) =>{

    let navClass = props.side? 'navigation-items navigation-items--side': 'navigation-items';
    
    return(
        <ul className={navClass}  onClick={props.sideDrawerClose}>
            
            <NavigationItem link='/'>
                Burger Builder
            </NavigationItem>

            {props.isAuthenticated?<NavigationItem link="/orders" >
                Orders
            </NavigationItem> : null}

            <NavigationItem link={props.isAuthenticated ? '/logout' : '/auth'} >
                {props.isAuthenticated ? 'Logout': 'Login'}
            </NavigationItem>
        </ul>
    )
}



export default navigationItems;