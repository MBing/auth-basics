import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Register } from './components/auth/Register';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Welcome} />
      <Route path="/register" component={Register} />
    </App>
  </BrowserRouter>,
  document.querySelector('#root')
);
