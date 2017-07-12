import * as APIUtil from '../util/todo_api_util';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const fetchTodos = () => ((dispatch) => (APIUtil.getTodos().then(todos => dispatch(receiveTodos(todos)))));
export const createTodo = (todo) => ((dispatch) => (APIUtil.postTodo(todo).then(todo2 => dispatch(receiveTodo(todo2)))));
window.fetchTodos = fetchTodos;

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
