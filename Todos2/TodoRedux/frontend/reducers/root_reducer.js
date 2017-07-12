import {combineReducers} from 'redux';
import todosReducers from './todos_reducers';

const rootReducer = combineReducers({
  todos: todosReducers
});

export default rootReducer;
