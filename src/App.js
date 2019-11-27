import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Maps, AdminTools } from './container';

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => <Maps {...props} /> } />
        <Route exact path="/admin" render={ () => <AdminTools {...props} /> } />
      </Switch>
    </div>
  );
}

export default App;
