import React, {Suspense,useEffect} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import {Route, Switch,Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports'
import Spinner from '../../recycle/Spinner/Spinner'
import useAlert from '../../hooks/useAlert';
import Alert from '../../recycle/Alert/Alert'
import Prompt from '../../recycle/Prompt/Prompt'

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

  const [alertShown, showAlert] = useAlert(false);

  const localToken = localStorage.getItem('token');  

  useEffect(() => {
      dispatch(actions.refreshAuth(localToken))
      localStorage.setItem('purchaseCount','0')
  // eslint-disable-next-line 
  },[])


  const acknowledgeAlert = () => {
    showAlert(false)
    dispatch(actions.acknowledgeTimerExpiration())
  }

  useEffect(() => {
    if(timerExpired){
      showAlert(true)
    }
  // eslint-disable-next-line
  },[timerExpired])

 
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
    <>
      {alertShown? 
        <Alert closeAlert={acknowledgeAlert}>
          <Prompt acknowledgeAlert={acknowledgeAlert}>
              You are automatically logged out :( Please login again
          </Prompt>
        </Alert>
      : null}


      <Layout>
        <Switch>
            {routes(isAuthenticated)}
        </Switch>
      </Layout>
    </>
  )
}

export default App;
