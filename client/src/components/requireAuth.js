import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({ auth: state.auth.authenticated });
  return connect(mapStateToProps)(ComposedComponent);
};

export { requireAuth };
