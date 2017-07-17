import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
