import statusSearchForm from './components/reducers/SearchReducer';
import menuReducer from './components/reducers/MenuReducer';
import refCategory from './components/reducers/SendRefReducer';

const redux = require('redux');

const allReducers = redux.combineReducers({
    statusSearchForm,
    menuReducer,
    refCategory
});
const store = redux.createStore(allReducers);

export default store;