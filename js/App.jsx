import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { string, shape } from 'prop-types';

import LandingPage from './LandingPage';
import Search from './Search';
import NotFoundPage from './NotFoundPage';
import Details from './Details';
import preload from '../data.json';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
        path="/search"
        component={(props) =>
          (<Search
          shows={preload.shows}
           {...props}
           />)} />
        <Route
        path="/details/:id"
        component={(props) => {
          const { match: { params } } = props;
          const selectedShow = preload.shows.find((show) =>
            params.id === show.imdbID);
          return <Details show={selectedShow} {...props} />;
        }}
          />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

App.defaultProps = {
  match: {}
};

App.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired
    }),
  })
};


export default App;
