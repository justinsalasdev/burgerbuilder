import React from 'react';
import './drawertoggle.scss';

const drawerToggle = (props) => {
    const {toggleSideDrawer} = props;
    return (
        // <div onClick={props.clicked}>MENU</div>
        <div onClick={toggleSideDrawer} className={'drawertoggle'}>
            <div className={'drawertoggle__bar'}></div>
            <div className={'drawertoggle__bar'}></div>
            <div className={'drawertoggle__bar'}></div>
        </div>
    )
}

export default drawerToggle;