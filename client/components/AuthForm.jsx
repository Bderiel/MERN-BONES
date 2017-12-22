import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../redux';


class AuthForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    this.props.auth(email, password, formName);
  }

  render() {
    const formType = this.props.match.path.slice(1);
    return (
      <div>
        <h2>{formType}</h2>
        <form onSubmit={this.handleSubmit} name={formType}>
          <input type="email" name="email" defaultValue="" />
          <input type="password" name="password" />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = { auth };
export default connect(null, mapDispatch)(AuthForm);

AuthForm.propTypes = {
  auth: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired, 
};
