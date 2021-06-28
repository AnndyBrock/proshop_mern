import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducer'
import {loginReducer, registerReducer, detailsReducer, updateReducer} from './reducers/userReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userLogin:loginReducer,
    userRegister:registerReducer,
    userDetails: detailsReducer,
    userUpdate: updateReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userItemsFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};

const initialState = {
    cart:{ cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage},
    userLogin: {userInfo: userItemsFromStorage}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
