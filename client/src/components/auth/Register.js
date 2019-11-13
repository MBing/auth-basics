import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterContainer extends Component {
  render() {
    return (
      <form>
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
      </form>
    );
  }
}

const Register = reduxForm({ form: 'register' })(RegisterContainer);
export { Register };
