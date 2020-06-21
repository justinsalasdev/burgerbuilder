import React from 'react';
import './drawertoggle.scss';

const drawerToggle = (props) => {
    return (
        // <div onClick={props.clicked}>MENU</div>
        <div onClick={props.clicked} className={'drawertoggle'}>
            <div className={'drawertoggle__bar'}></div>
            <div className={'drawertoggle__bar'}></div>
            <div className={'drawertoggle__bar'}></div>
        </div>
    )
}

export default drawerToggle;