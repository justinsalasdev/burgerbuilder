import React from 'react';
import burgerLogo from '../../assets/icons/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={[classes.Logo, props.tool ? classes.Logo__tool : classes.Logo__side].join(' ') }>
            <img src={burgerLogo} alt="brand-logo"/>
        </div>
    )
}

export default logo;