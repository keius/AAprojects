import pokemonReducer from './pokemon_reducer.js';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default rootReducer;
