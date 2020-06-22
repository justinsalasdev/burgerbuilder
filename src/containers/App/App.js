import React, {useEffect, Suspense, useCallback} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Logout from '../Logout/Logout';
import Login from '../Login/Login';
import {Route, Switch,Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports'
import Spinner from '../../components/Spinner/Spinner'

const Checkout = React.lazy(() => {return import ('../Checkout/Checkout')})
const Orders = React.lazy(() => {return import ('../Orders/Orders')})
const Auth = React.lazy(() => {return import ('../Auth/Auth')})


const App = props => {

  const dispatch = useDispatch();
  const onPageLoadSignUp = useCallback(() => dispatch(actions.checkAuth()),[dispatch])
  const isAuthenticated = useSelector(state => state.authenticate.token !== null)

  useEffect(() => {
    onPageLoadSignUp();
  },[onPageLoadSignUp])

  const routes = function (isAuthenticated){
    if(isAuthenticated){
      return (
          <>
            <Suspense fallback={<Spinner/>}><Route path="/checkout" component={Checkout}/></Suspense>
            <Suspense fallback={<Spinner/>}><Route path="/orders" component={Orders}/></Suspense>
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to ="/" />
          </>
      )
    } else {
      return (
        <>
          <Suspense fallback={<Spinner/>}><Route path="/auth" component={Auth} /></Suspense>
          <Route path="/login" component={Login} />
          {/* <Route path="/auth" component={Auth} /> */}
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to = "/"/>
        </>
      )
    }
  }

  return(
    <Layout>
      <Switch>
          {routes(isAuthenticated)}
      </Switch>
    </Layout>
  )
}

export default App;
