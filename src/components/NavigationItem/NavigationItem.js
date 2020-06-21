import React from 'react';
import './navigationitem.scss'
import {NavLink} from 'react-router-dom';


const navigationItem = (props) =>{
    return(
        <li className={'navigation-item'}>
            <NavLink 
                to={props.link}
                exact
                activeClassName={'active'}
            >{props.children}</NavLink>
        </li>
    )
    
}

export default navigationItem;

