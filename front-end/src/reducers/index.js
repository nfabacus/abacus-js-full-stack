import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import messageReducer from './message_reducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  messanger: messageReducer,
  routing: routerReducer  //we have added this routerReducer from react-router-redux
});

export default rootReducer;
