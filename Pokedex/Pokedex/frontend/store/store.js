import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunkMiddleware from '../middleware/thunk';


export const configureStore = () => createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
