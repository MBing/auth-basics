import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
        <Link to="/logout">Log Out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }
}

export { Header };
