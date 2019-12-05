import { combineReducers } from 'redux';
import PlayerReducer from './PlayerReducer';
import LoginCheckReducer from './LoginCheckReducer';
//Here we will import our reducers

const reducers = {
    player: PlayerReducer,
    loginState : LoginCheckReducer
    //here we will place our reducers name imported above
}

const appReducer = combineReducers(reducers);

export default appReducer;
