import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory();
import reduxThunk from 'redux-thunk';

import App from './components/app';
import { AUTH_USER } from './actions/types';

import Header from './components/header';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Dashboard from './components/dashboard';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in.
if(token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={App}/>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/dashboard" component={RequireAuth(Dashboard)} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
