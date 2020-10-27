import statusSearchForm from './components/reducers/SearchReducer';

const redux = require('redux');

const allReducers = redux.combineReducers({
    statusSearchForm
});
const store = redux.createStore(allReducers);

export default store;