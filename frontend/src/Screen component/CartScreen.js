import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data";

function useCheckout() {
  const navigate = useNavigate();

  function checkOutHandler() {
    navigate("/shipping");
  }

  return { checkOutHandler };
}

export default function CartScreen() {
  let { id } = useParams();

  const product =
    data.products.find((x) => parseInt(x.id) === parseInt(id)) || {};
  const { stock } = product;

  const searchParams = new URLSearchParams(window.location.search);
  const initialQuantity = searchParams.has("qty")
    ? parseInt(searchParams.get("qty"), 10)
    : 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [cartItems, setCartItems] = useState([{ product, quantity }]);

  useEffect(() => {
    console.log("Product ID:", id);
    console.log("Quantity:", quantity);
  }, [id, quantity]);

  const handleQuantityChange = (productId, newQuantity) => {
    const newCartItems = cartItems.map((item) =>
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(newCartItems);
    // update quantity for the current product
    if (product.id === productId) {
      setQuantity(newQuantity);
    }
  };
  

  const handleRemoveItem = (productId) => {
    const newCartItems = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(newCartItems);
  };

  const { checkOutHandler } = useCheckout();

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h1>Shopping Cart</h1>
          </li>
          {cartItems.length === 0 ? (
            <li>Your cart is empty</li>
          ) : (
            cartItems.map((item) => (
              <li key={item.product.id}>
                <div className="cart-image">
                  <img src={item.product.image} alt="product-img" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product.id}>
                      <h2>{item.product.name}</h2>
                    </Link>
                  </div>
                  <div>
                    Qty:
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.product.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="cart-price">${item.product.price}</div>
                  <div>
                    <button
                      className="button"
                      onClick={() => handleRemoveItem(item.product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        {cartItems.length > 0 && (
          <h3>
            &nbsp;Subtotal ({quantity} item{quantity > 1 ? "s" : ""}): $
            {cartItems.reduce(
              (total, item) => total + item.product.price * item.quantity,
              0
            )}
          </h3>
        )}
        <button
          onClick={checkOutHandler}
          className="buttonP primary"
          disabled={stock === 0}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
 