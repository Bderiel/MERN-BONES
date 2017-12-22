import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LaunchPad, AuthForm } from './components';
import history from './history';
import { me } from './redux';

class Routes extends Component {
  componentDidMount() {
    this.props.me(); // Gets current user on application load
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={AuthForm} />
          <Route exact path="/signup" component={AuthForm} />
          <Route exact path="/" component={LaunchPad} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatch = { me };
export default connect(null, mapDispatch)(Routes);

Routes.propTypes = {
  me: PropTypes.func.isRequired,
};
