import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import { AUTH_USER } from './actions/types';
import Welcome from './components/welcome';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Dashboard from './components/dashboard';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory))
 )(createStore);

 export const store = finalCreateStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(browserHistory, store)


const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in.
if(token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />

          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/dashboard" component={Dashboard} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
