import statusSearchForm from './components/reducers/SearchReducer';
import menuReducer from './components/reducers/MenuReducer';

const redux = require('redux');

const allReducers = redux.combineReducers({
    statusSearchForm,
    menuReducer
});
const store = redux.createStore(allReducers);

export default store;