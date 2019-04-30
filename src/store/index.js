import { createStore, combineReducers } from 'redux';
const reducers = require('../reducers');
const reducer = combineReducers(reducers.default);
const store = createStore(reducer);
export default store;