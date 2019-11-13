import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Register } from './components/auth/Register';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} />
        <Route path="/register" component={Register} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
