import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Maps, AdminTools, LoginForm } from './container';

const App = props => {
  const { isAuth, access } = props;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => (isAuth === true ? <Maps /> : <Redirect to="/login" /> ) } />
        <Route exact path="/login" component={ LoginForm } />
        <Route exact path="/admin" render={ () => <AdminTools {...props} /> } />
      </Switch>
    </div>
  );
}

export default connect( ({ auth }) => ({ isAuth: auth.auth, access: auth.access }) )(App);
