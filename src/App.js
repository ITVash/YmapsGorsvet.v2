import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Maps, AdminTools, LoginForm, RegisterForm } from './container';

const App = props => {
  const { isAuth, access } = props;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => (isAuth === true ? <Maps /> : <Redirect to="/login" /> ) } />
        <Route exact path="/login" component={ LoginForm } />
        <Route exact path="/register" component={ RegisterForm } />
        <Route exact path="/admin" render={ () => (access >= 5 ? <AdminTools /> : <Redirect to="/" />) } />
      </Switch>
    </div>
  );
}

export default connect( ({ auth }) => ({ isAuth: auth.auth, access: auth.items.access }) )(App);
