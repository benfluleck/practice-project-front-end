import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import Search from './Search';
import NotFoundPage from './NotFoundPage';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/search" component={Search} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
