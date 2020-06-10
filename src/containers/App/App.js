import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import Auth from '../Auth/Auth';
import Logout from '../Logout/Logout';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Orders from '../Orders/Orders';
import * as actions from '../../store/actions/exports'

class App extends Component {
  
  componentDidMount(){
    this.props.onPageLoadSignUp();
  }

  render(){
    return(
      <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={BurgerBuilder}/>

          </Switch>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoadSignUp: () => dispatch(actions.checkAuth())
  }
}

export default connect(null,mapDispatchToProps)(App);
