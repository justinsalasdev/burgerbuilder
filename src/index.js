import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
// import reducer from './store/reducer';
import buildBurger from './store/reducers/buildBurger'
import placeOrder from './store/reducers/placeOrder'
import fetchOrders from './store/reducers/fetchOrders'
import authenticate from './store/reducers/authenticate'
import thunk from 'redux-thunk';

//Basic redux setup
// const store = createStore(burgerBuilderReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = (process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
  buildBurger: buildBurger,
  placeOrder: placeOrder,
  fetchOrders: fetchOrders,
  authenticate: authenticate
})

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunk)
    ));


const app = (
  <Provider store={store}>
    <BrowserRouter  basename="/burger-builder-dev">
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
