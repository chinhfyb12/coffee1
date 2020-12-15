import statusSearchForm from './components/reducers/SearchReducer';
import menuReducer from './components/reducers/MenuReducer';
import category from './components/reducers/SendCategoryReducer';

const redux = require('redux');

const allReducers = redux.combineReducers({
    statusSearchForm,
    menuReducer,
    category
});
const store = redux.createStore(allReducers);

export default store;