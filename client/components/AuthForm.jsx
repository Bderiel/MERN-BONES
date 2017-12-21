import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export default class AuthForm extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('hello');
  }

  render() {
    return (
      <div>
        <h2>LogIn</h2>
        <button onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
