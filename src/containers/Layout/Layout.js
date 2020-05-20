import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.module.css';

const layout = (props) =>{
    return (
    <Wrapper>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.main}>
            {props.children}
        </main>
    </Wrapper>
    )
};



export default layout ;