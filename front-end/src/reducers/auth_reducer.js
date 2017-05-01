import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return _.extend({}, state, { error: '', authenticated: true });
    case UNAUTH_USER:
      return _.extend({}, state, { authenticated: false });
    case AUTH_ERROR:
      return _.extend({}, state, { error: action.payload });
  }

  return state;
}
