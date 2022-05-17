import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import BusStopPage from '../components/BusStopPage';
import BusStopsPage from '../components/BusStopsPage';
import NavigationPage from '../components/NavigationPage';
import RouteOptionsPage from '../components/RouteOptionsPage';
import RouteNavigationPage from '../components/RouteNavigationPage';

const Router = ({ children }) => (
  <ConnectedRouter history={history}>
    {children}
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/busStops" component={BusStopsPage} />
      <Route path="/busStop" component={BusStopPage} />
      <Route path="/navigation" exact component={NavigationPage} />
      <Route path="/navigation/options" exact component={RouteOptionsPage} />
      <Route path="/navigation/navigate" exact component={RouteNavigationPage} />
    </Switch>
  </ConnectedRouter>
);

Router.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Router;
