import React  from 'react';
import './navigationitems.scss'
import '../../recycle/Link/link.scss'
import {NavLink} from 'react-router-dom';
// import NavigationItem from '../NavigationItem/NavigationItem';
import {useSelector} from 'react-redux';


const NavigationItems = (props) =>{
    const {closeSideDrawer} = props;
    const idToken = useSelector(state => state.login.idToken);
    const isAuthenticated = idToken !== null;

    return(
        <ul className='navigation-items'  onClick={closeSideDrawer}>
            
            <li className={'navigation-item'}>
                <NavLink 
                    to='/'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >Burger Builder</NavLink>
            </li>

            {isAuthenticated?<li className={'navigation-item'}>
                <NavLink 
                    to='/profile'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >Profile</NavLink>
            </li>: null}

              
            {isAuthenticated?<li className={'navigation-item'}>
                <NavLink 
                    to='/orders'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >Orders</NavLink>
            </li>: null}

            <li className={'navigation-item'}>
                <NavLink 
                    to={isAuthenticated?'/logout' : '/login'}
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >{isAuthenticated? 'Logout': 'Login'}</NavLink>
            </li>

        </ul>



    )
}



export default NavigationItems;