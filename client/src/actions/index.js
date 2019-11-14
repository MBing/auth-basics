import { AUTH_ERROR, AUTH_USER } from './types';
import * as axios from 'axios';

// action creator, returns an action
// expose the dispatch, so you are not bound by 1 action to return
// helped by through using middleware, to gain control of when and what to do regarding sending actions
// redux-promise is very basic approach, 1 promise, 1 action...
// thunk allows more versatility
export const register = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3090/register',
      formProps
    );

    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    localStorage.setItem('mb-auth', response.data.token); // store the token for persistence
    callback(); // here the redirect happens
  } catch (error) {
    // using this error when thrown will not make it easy to show in the UI, so we use a more readable error
    dispatch({ type: AUTH_ERROR, payload: error.response.data.error });
  }
};
