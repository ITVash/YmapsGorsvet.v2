import { combineReducers } from 'redux';

//import auth from './auth';
import coup from './coup';
import opora from './opora';
import svet from './svet';

export default combineReducers({
  coup,
  opora,
  svet
});