import React, {Suspense, useEffect} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Logout from '../Logout/Logout';
import {Route, Switch,Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports'
import Spinner from '../../recycle/Spinner/Spinner'
// import database from '../../axios/database';

const Checkout = React.lazy(() => import ('../Checkout/Checkout'))
const Orders = React.lazy(() => import ('../Orders/Orders'))
const Login = React.lazy(() => import ('../Login/Login'))
const Signup = React.lazy(() => import ('../Signup/Signup'))
const Profile = React.lazy(() => import('../Profile/Profile'))

const App = props => {

  const dispatch = useDispatch();
  const idToken = useSelector(state => state.login.idToken)
  
  


  dispatch(actions.refreshAuth(idToken))

  const isAuthenticated = idToken !== null;


  const routes = function (isAuthenticated){
    if(isAuthenticated){
      return (
          <>
            <Suspense fallback={<Spinner/>}><Route path="/checkout" component={Checkout}/></Suspense>
            <Suspense fallback={<Spinner/>}><Route path="/orders" component={Orders}/></Suspense>
            <Suspense fallback={<Spinner/>}><Route path="/profile" component={Profile}/></Suspense>
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to ="/" />
          </>
      )
    } else {
      return (
        <>
          <Suspense fallback={<Spinner/>}><Route path="/login" component={Login} /></Suspense>
          <Suspense fallback={<Spinner/>}><Route path="/signup" component={Signup} /></Suspense>
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
