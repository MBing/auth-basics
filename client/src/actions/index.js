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
    callback(); // here the redirect happens
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error });
  }
};
