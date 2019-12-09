import React from 'react';
import ReactDOM from 'react-dom';
import jwtDec from 'jwt-decode';
import './index.scss';
import "antd/dist/antd.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { authActions } from './redux/actions';
//время жизни токена 604800

const token = localStorage.token;
if ( token ) {
  const decodeTok = jwtDec(token);
  if ( decodeTok.exp * 1000 > Date.now() ) {
    store.dispatch(authActions.fetchAuth( decodeTok.user_id ));
  } else {
    localStorage.removeItem('token');
    store.dispatch(authActions.logout(false));
    window.location.href = "/login";
  }
} else {
  store.dispatch(authActions.logout(false));
  //window.location.href = "/login";
  console.log('Нет токена, необходима авторизация!');
}


window.store = store;
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

serviceWorker.unregister();
