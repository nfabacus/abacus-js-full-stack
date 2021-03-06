import axios from 'axios';
// import {history} from '../reactApp';
import { push } from 'react-router-redux'; //this library is added.  With this routes are stored in state.

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
 } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signupUser({ email, username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, username, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        // history.push('/dashboard');
        dispatch(push('/dashboard'))
      })
      .catch(error => {
        //throw error;
        //below dispatches error from the backend server.
        dispatch(authError(error.response.data.error));
      });
  }
}

export function signinUser({ username, password }) {
  return function(dispatch) {
    // Purpose of redux-thunk is to dispatch multiple different actions inside action creator. can also insert different logic.  can wait as long as we want to dispatch action, in contrary to normal synchronous actions

    // Submit username/password to the server
       //below {username, password} is the short for { username:username, password:password }
    axios.post(`${ROOT_URL}/signin`, {username, password})
      .then(response => {
        console.log(response)
        // If request is good,
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // - Save the JWT token
        localStorage.setItem('token', response.data.token);

        // - redirect to the route '/dashboard'
        // browserHistory.push('/dashboard');
        dispatch(push('/dashboard'));
      })
      .catch((error) => {
        console.log(Object.keys(error.response), error.response)
        // If request is bad,
        // - Show an error to the user
        dispatch(authError('Bad Login Info')); //pass the error here.
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      });
    }, error=>{
      console.log(error);
    });
  }
}
