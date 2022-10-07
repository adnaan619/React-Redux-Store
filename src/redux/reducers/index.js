import { combineReducer } from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducer({
    allProducts: productReducer,
});

export default reducers;