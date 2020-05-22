import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.module.css';
import Toolbar from '../../components/Toolbar/Toolbar'; 
import SideDrawer from '../../components/SideDrawer/SideDrawer';

const layout = (props) =>{
    return (
    <Wrapper>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.main}>
            {props.children}
        </main>
    </Wrapper>
    )
};



export default layout ;