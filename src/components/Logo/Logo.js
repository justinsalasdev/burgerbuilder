import React from 'react';
import burgerLogo from '../../assets/icons/burger-logo.png';
import './logo.scss';

const logo = (props) => {
    return (
        <div className={'logo'}>
            <img src={burgerLogo} alt="brand-logo" className={'logo__img'} />
        </div>
    )
}

export default logo;