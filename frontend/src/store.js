import {applyMiddleware, combineReducers, compose} from "redux"
import {configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import { productDetailsReducer, productListReducer } from "./Reducers/productReducer";
import cartReducer from "./Reducers/cartReducer";
import Cookies from "js-cookie";

const cartItems = JSON.parse(Cookies.get('cartItems') || '{}');

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

//thunk- allows to write action creators that returns a function instead of action
const store = configureStore({reducer},{}, initialState, compose(applyMiddleware(thunk))); // middleware helps to reach out to reducer through dispatch method

export default store


