import { createStore } from 'redux';
import makeRootReducer from './reducers';

const store = createStore(makeRootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;