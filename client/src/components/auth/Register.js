import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class RegisterContainer extends Component {
  onSubmit = formProps => {
    this.props.register(formProps, () => {
        this.props.history.push('/feature')
    });
  };
  render() {
    const { handleSubmit } = this.props;
    console.log('props error', this.props.errorMessage);
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage,
});

const Register = compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'register' })
)(RegisterContainer);

export { Register };
