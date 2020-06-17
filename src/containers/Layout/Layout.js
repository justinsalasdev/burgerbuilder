import React, {useState} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.module.css';
import Toolbar from '../../components/Toolbar/Toolbar'; 
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

const Layout = props => {
    const [sideDrawerShown, showSideDrawer] = useState(false)

    const closeSideDrawer = () => {
        showSideDrawer(false)
    }

    const toggleSideDrawer = () => {
        showSideDrawer(!sideDrawerShown)
    }

    return(
        <Wrapper>
            <Toolbar 
                drawerToggleClicked={toggleSideDrawer}
                isAuthenticated={props.isAuthenticated}/>
            <SideDrawer 
                isAuthenticated={props.isAuthenticated}
                open={sideDrawerShown} 
                closed={closeSideDrawer}/>
            <main className={classes.main}>
            {props.children}
            </main>
        </Wrapper>

    )

}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authenticate.token !== null
    }
}


export default connect(mapStateToProps)(Layout) ;