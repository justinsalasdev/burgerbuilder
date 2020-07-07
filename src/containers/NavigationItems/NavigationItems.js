import React  from 'react';
import './navigationitems.scss'
import '../../recycle/Link/link.scss'
import {NavLink,useHistory} from 'react-router-dom';
// import NavigationItem from '../NavigationItem/NavigationItem';
import * as actions from '../../store/actions/exports';
import {useSelector,useDispatch} from 'react-redux';


const NavigationItems = (props) =>{
    console.log(props)
    const {closeSideDrawer} = props;
    
    const dispatch = useDispatch();
    const history = useHistory();
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

            {!isAuthenticated ? null:
            <li className={'navigation-item'}>
                <NavLink 
                    to='/profile'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >Profile</NavLink>
            </li>}

              
            {!isAuthenticated? null:
            <li className={'navigation-item'}>
                <NavLink 
                    to='/orders'
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >Orders</NavLink>
            </li>}

            {isAuthenticated ? null:
            <li className={'navigation-item'}>
                <NavLink 
                    to={'/login'}
                    exact
                    className='link--nav'
                    activeClassName={'active'}
                >Login</NavLink>
            </li>}   

            {!isAuthenticated ? null:
            <li className={'navigation-item'}>
                <a href='/'
                    className='link--nav'
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(actions.logout())
                        history.replace('/')
                    }}
                >Logout</a>
            </li>}


           
        </ul>



    )
}



export default NavigationItems;