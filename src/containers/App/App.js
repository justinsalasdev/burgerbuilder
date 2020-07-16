import React, {Suspense,useEffect} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import {Route, Switch,Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports'
import Spinner from '../../recycle/Spinner/Spinner'

const Checkout = React.lazy(() => import ('../Checkout/Checkout'))
const Orders = React.lazy(() => import ('../Orders/Orders'))
const Login = React.lazy(() => import ('../Login/Login'))
const Signup = React.lazy(() => import ('../Signup/Signup'))
const EditProfile = React.lazy(() => import('../EditProfile/EditProfile'))
const StaticProfile = React.lazy(() => import('../StaticProfile/StaticProfile'))

const App = props => {

  const dispatch = useDispatch();
  const reduxToken = useSelector(state => state.login.idToken);
  const timerExpired = useSelector(state => state.login.timerExpired);
  console.log(timerExpired)


  const localToken = localStorage.getItem('token');  
  useEffect(() => {
      dispatch(actions.refreshAuth(localToken))
      localStorage.setItem('purchaseCount','0')
  // eslint-disable-next-line 
  },[])

  console.log('app renders')
  if(timerExpired){
    alert('timer expired')
  }

  


  const isAuthenticated = reduxToken !== null;


  const routes = function (isAuthenticated){
    if(isAuthenticated){
      return (
          <>
            <Suspense fallback={<Spinner/>}><Route path="/checkout" component={Checkout}/></Suspense>
            <Suspense fallback={<Spinner/>}><Route path="/orders" component={Orders}/></Suspense>
            <Suspense fallback={<Spinner/>}><Route path="/profile-edit" component={EditProfile}/></Suspense>
            <Suspense fallback={<Spinner/>}><Route path="/profile" component={StaticProfile}/></Suspense>
            <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to ="/" />
          </>
      )
    } else {
      return (
        <>
          <Suspense fallback={<Spinner/>}><Route path="/login" component={Login} /></Suspense>
          <Suspense fallback={<Spinner/>}><Route path="/signup" component={Signup} /></Suspense>
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
