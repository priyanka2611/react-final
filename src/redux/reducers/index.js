import { combineReducers } from 'redux';
import PlayerReducer from './PlayerReducer';
import LoginCheckReducer from './LoginCheckReducer';
import CertificateReducer from './CertificateReducer';
//Here we will import our reducers

const reducers = {
    playerReducer: PlayerReducer,
    userReducer : LoginCheckReducer,
    unitReducer:CertificateReducer
    //here we will place our reducers name imported above
}

const appReducer = combineReducers(reducers);

export default appReducer;
