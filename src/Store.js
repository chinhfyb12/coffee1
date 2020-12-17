import statusSearchForm from './components/reducers/SearchReducer';
import menuReducer from './components/reducers/MenuReducer';
import pathProduct from './components/reducers/SendProductPathReducer';
import initPathname from './components/reducers/SendInitPathname';
import statusLoader from './components/reducers/StatusLoader';

const redux = require('redux');

const allReducers = redux.combineReducers({
    statusSearchForm,
    menuReducer,
    pathProduct,
    initPathname,
    statusLoader
});
const store = redux.createStore(allReducers);

export default store;