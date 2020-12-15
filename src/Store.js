import statusSearchForm from './components/reducers/SearchReducer';
import menuReducer from './components/reducers/MenuReducer';
import category from './components/reducers/SendCategoryReducer';
import pathProduct from './components/reducers/SendProductPathReducer';
import keyProduct from './components/reducers/SendKeyProductReducer';

const redux = require('redux');

const allReducers = redux.combineReducers({
    statusSearchForm,
    menuReducer,
    category,
    pathProduct,
    keyProduct
});
const store = redux.createStore(allReducers);

export default store;