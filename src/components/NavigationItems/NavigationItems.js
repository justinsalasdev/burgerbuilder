import React from 'react';
import './navigationitems.scss'
import NavigationItem from '../NavigationItem/NavigationItem';
import {useSelector} from 'react-redux';


const NavigationItems = (props) =>{
    const isAuthenticated = useSelector(state => state.authenticate.token !== null)
    let navClass = props.side? 'navigation-items navigation-items--side': 'navigation-items';
    
    return(
        <ul className={navClass}  onClick={props.sideDrawerClose}>
            
            <NavigationItem link='/'>
                Burger Builder
            </NavigationItem>

            {isAuthenticated?<NavigationItem link="/orders" >
                Orders
            </NavigationItem> : null}

            <NavigationItem link={isAuthenticated ? '/logout' : '/auth'} >
                {isAuthenticated ? 'Logout': 'Login'}
            </NavigationItem>
        </ul>
    )
}



export default NavigationItems;