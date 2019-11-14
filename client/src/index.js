import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Register } from './components/auth/Register';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';
import { Feature } from './components/Feature';
import {Logout} from "./components/auth/Logout";

const store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('mb-auth')}
}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/feature" component={Feature} />
        <Route path="/logout" component={Logout} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
