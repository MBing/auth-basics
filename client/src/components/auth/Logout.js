import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions';

class LogoutContainer extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <div>Sorry to see you go.</div>;
  }
}

const Logout = connect(null, { logout })(LogoutContainer);

export { Logout };
