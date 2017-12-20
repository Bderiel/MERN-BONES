import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LaunchPad } from './components';
import history from './history';

class Routes extends Component {
  componentDidMount() {
    console.log('routes mounted');
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={LaunchPad} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
