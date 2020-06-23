import React from 'react';
import './navigationitems.scss'
import {NavLink} from 'react-router-dom';
// import NavigationItem from '../NavigationItem/NavigationItem';
import {useSelector} from 'react-redux';


const NavigationItems = (props) =>{
    const isAuthenticated = useSelector(state => state.authenticate.token !== null)
    // let navClass = props.side? 'navigation-items navigation-items--side': 'navigation-items';

    
    return(
        <ul className='navigation-items'  onClick={props.sideDrawerClose}>
            
            <li className={'navigation-item'}>
                <NavLink 
                    to='/'
                    exact
                    activeClassName={'active'}
                >Burger Builder</NavLink>
            </li>

              
            {isAuthenticated?<li className={'navigation-item'}>
                <NavLink 
                    to='/orders'
                    exact
                    activeClassName={'active'}
                >Orders</NavLink>
            </li>: null}

            
            <li className={'navigation-item'}>
                <NavLink 
                    to={isAuthenticated?'/logout' : '/login'}
                    exact
                    activeClassName={'active'}
                >{isAuthenticated? 'Logout': 'Login'}</NavLink>
            </li>

        </ul>



    )
}



export default NavigationItems;