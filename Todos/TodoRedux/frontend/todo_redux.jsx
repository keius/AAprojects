import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
});
