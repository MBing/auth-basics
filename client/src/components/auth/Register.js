import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterContainer extends Component {
  onSubmit = formProps => {
    console.log(formProps);
  };
  render() {
    const { handleSubmit } = this.props;
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
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const Register = reduxForm({ form: 'register' })(RegisterContainer);
export { Register };
