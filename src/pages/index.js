import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
