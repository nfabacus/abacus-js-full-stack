import {
  FETCH_MESSAGE
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_MESSAGE:
      return _.extend({}, state, { message: action.payload });
  }

  return state;
}
