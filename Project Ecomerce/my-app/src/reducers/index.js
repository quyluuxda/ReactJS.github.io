import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import infoproduct from './infoproduct';
const appReducers = combineReducers({
    products:products,
    cart:cart,
    infoproduct: infoproduct
});

export default appReducers;