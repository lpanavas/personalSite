import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Publications from './Publications';
import Publicity from './Publicity';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/publications">
          <Publications user={user} />
        </Route>
        <Route exact path="/projects">
          <Projects user={user} />
        </Route>
        <Route exact path="/publicity">
          <Publicity user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
