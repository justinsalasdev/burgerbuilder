import React  from 'react';
import './navigationitems.scss'
import '../../recycle/Link/link.scss'
import {NavLink,useHistory} from 'react-router-dom';
// import NavigationItem from '../NavigationItem/NavigationItem';
import * as actions from '../../store/actions/exports';
import {useSelector,useDispatch} from 'react-redux';

import spatula from '../../assets/icons/spatula.svg'
import profile from '../../assets/icons/profile.svg'
import notes from '../../assets/icons/notes.svg'



const NavigationItems = (props) =>{
    const {closeSideDrawer} = props;
    
    const dispatch = useDispatch();
    const history = useHistory();
    const idToken = useSelector(state => state.login.idToken);
    const isAuthenticated = idToken !== null;

    return(
        <ul className='navigation-items'  onClick={closeSideDrawer}>
            
            <li>
                <NavLink 
                    to='/'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >
                    <img className='navigation-items__img' src={spatula} alt='to burger builder'/>
                    <span className='navigation-items__text'>Burger Builder</span>
                </NavLink>
            </li>

            {!isAuthenticated ? null:
            <li>
                <NavLink 
                    to='/profile'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >
                    <img className='navigation-items__img' src={profile} alt='to your profile'/>
                    <span className='navigation-items__text'>Profile</span>
                </NavLink>
            </li>}

              
            {!isAuthenticated? null:
            <li>
                <NavLink 
                    to='/orders'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >
                    <img className='navigation-items__img' src={notes} alt='to your order list'/>
                    <span className='navigation-items__text'>Orders</span>
                </NavLink>
            </li>}

            {isAuthenticated ? null:
            <li>
                <NavLink 
                    to={'/login'}
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >
                    Login
                </NavLink>
            </li>}   

            {!isAuthenticated ? null:
            <li>
                <a href='/'
                    className='link--nav'
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(actions.logout('manual'))
                        history.replace('/')
                    }}
                >
                   Logout
                </a>
            </li>}


           
        </ul>



    )
}



export default NavigationItems;