import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/" exact component={BurgerBuilder}/>
            {/* <BurgerBuilder/> */}
            {/* <Checkout/> */}
          </Switch>
      </Layout>
    )
  }
}

export default App;
