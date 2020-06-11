import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import Auth from '../Auth/Auth';
import Logout from '../Logout/Logout';
import {Route, Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Orders from '../Orders/Orders';
import * as actions from '../../store/actions/exports'

class App extends Component {
  
  componentDidMount(){
    this.props.onPageLoadSignUp();
  }


  render(){
    
  const routes = function (isAuthenticated){
    if(isAuthenticated){
      return (
          <>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to ="/" />
          </>
      )
    } else {
      return (
        <>
          <Route path="/auth" component={Auth}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to = "/"/>
        </>
      )
    }
  }

    return(
      <Layout>
        <Switch>
          {routes(this.props.isAuthenticated)}
        </Switch>
      </Layout>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated :  state.authenticate.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoadSignUp: () => dispatch(actions.checkAuth())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
