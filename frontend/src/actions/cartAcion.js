import axios from "axios"
import Cookies from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

const addToCart = (id, quantity) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/api/products/" + id);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                quantity
        }});
        const {cart : { cartItems } } = getState();
        Cookies.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {
        
    }
}
const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
    const {cart : { cartItems } } = getState();
        Cookies.set("cartItems", JSON.stringify(cartItems));
}
export {addToCart, removeFromCart}