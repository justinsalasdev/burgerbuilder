import React, {useEffect, Suspense} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Logout from '../Logout/Logout';
import {Route, Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports'
import Spinner from '../../components/Spinner/Spinner'

const Checkout = React.lazy(() => {return import ('../Checkout/Checkout')})
const Orders = React.lazy(() => {return import ('../Orders/Orders')})
const Auth = React.lazy(() => {return import ('../Auth/Auth')})


const App = props => {

  //componentDidMount
  useEffect(() => {
    props.onPageLoadSignUp();
  // eslint-disable-next-line
  },[])

  const routes = function (isAuthenticated){
    if(isAuthenticated){
      return (
          <>
            {/* <Route path="/checkout" render={() => <Checkout/>}/> */}
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
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to = "/"/>
        </>
      )
    }
  }

  return(
    <Layout>
      <Switch>
        <Suspense fallback={<Spinner/>}>
          {routes(props.isAuthenticated)}
        </Suspense>
      </Switch>
    </Layout>
  )
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
