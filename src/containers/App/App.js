import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import Auth from '../Auth/Auth';
import {Route, Switch} from 'react-router-dom';
import Orders from '../Orders/Orders';

class App extends Component {
  render(){
    return(
      <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/" exact component={BurgerBuilder}/>

            {/* <BurgerBuilder/> */}
            {/* <Checkout/> */}
          </Switch>
      </Layout>
    )
  }
}

export default App;
