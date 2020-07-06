import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
// import reducer from './store/reducer';
import buildBurger from './store/reducers/buildBurger'
import placeOrder from './store/reducers/placeOrder'
import fetchOrders from './store/reducers/fetchOrders'
import login from './store/reducers/login'
import signup from './store/reducers/signup'
import editProfile from './store/reducers/editProfile'
import thunk from 'redux-thunk';

//Basic redux setup
// const store = createStore(burgerBuilderReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = (process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
  buildBurger,
  placeOrder,
  fetchOrders,
  login,
  signup,
  editProfile
})

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunk)
    ));


const app = (
  <Provider store={store}>
    <BrowserRouter  basename="/burgerbuilder">
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  // <React.StrictMode>//disabled to show popUp :(
    <>
      {app}
    </>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
