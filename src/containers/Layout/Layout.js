import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.module.css';
import Toolbar from '../../components/Toolbar/Toolbar'; 
import SideDrawer from '../../components/SideDrawer/SideDrawer';


class Layout extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            showSideDrawer: false
        }

        this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
        this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);

    }


    sideDrawerClosedHandler(){
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler(){
        this.setState((prevState)=>{
            return(
                {showSideDrawer: !prevState.showSideDrawer}
            )
        });
    }

    render(){
        return(
            <Wrapper>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.main}>
                {this.props.children}
                </main>
            </Wrapper>
  
        )
    }

}

    



export default Layout ;