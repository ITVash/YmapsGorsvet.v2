import { combineReducers } from 'redux';

//import auth from './auth';
import coup from './coup';
import opora from './opora';
import svet from './svet';
import auth from './auth'

export default combineReducers({
  auth,
  coup,
  opora,
  svet
});