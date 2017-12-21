import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function () {
  return (
    <Fragment>
      <h2>Brian's Boilermaker</h2>
      <a href="https://www.linkedin.com/in/brian-deriel/">Click if you want to Hire Me</a>
      <br />
      <NavLink to="/login">LogIn</NavLink>
    </Fragment>
  );
}
