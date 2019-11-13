import { AUTH_USER } from './types';
import * as axios from 'axios';

// action creator, returns an action
// expose the dispatch, so you are not bound by 1 action to return
// helped by through using middleware, to gain control of when and what to do regarding sending actions
// redux-promise is very basic approach, 1 promise, 1 action...
// thunk allows more versatility
export const register = formProps => dispatch => {
  axios.post('http://localhost:3090/register', formProps);
};
