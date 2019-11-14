import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './HeaderStyle.css';

class HeaderContainer extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/logout">Log Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>

        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

const Header = connect(mapStateToProps)(HeaderContainer);
export { Header };
