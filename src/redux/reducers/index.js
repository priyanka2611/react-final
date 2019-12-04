import { combineReducers } from 'redux';
import PlayerReducer from './PlayerReducer';
//Here we will import our reducers

const reducers = {
    player: PlayerReducer
    //here we will place our reducers name imported above
}

const appReducer = combineReducers(reducers);

export default appReducer;