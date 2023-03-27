import React, { useState } from "react";
import data from "./data";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from './Screen component/HomeScreen';
import ProductScreen from './Screen component/ProductScreen';
import CartScreen from "./Screen component/CartScreen";
import SigninScreen from "./Screen component/SigninScreen";
import RegisterScreen from "./Screen component/RegisterScreen";
import ShippingScreen from "./Screen component/ShippingScreen";
import PaymentScreen from "./Screen component/PaymentScreen";
import PlaceOrderScreen from "./Screen component/PlaceOrderScreen";

function App() {

  const [searchKeyword, setSearchKeyword] = useState("");

  function handleSearch(e) {
    setSearchKeyword(e.target.value);
  }


  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  const filteredProducts = data.products.filter((product) =>
    product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/"><img src="/images/index.png" alt="Amazon" /></Link>
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search products..." value={searchKeyword} onChange={handleSearch} />
            <button type="submit">Search</button>
          </div>
          <div className="header-links">
            <Link to="/signin" />
            <a href="signin">Sign In</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/cart/:id?" />
            <a href="cart/">Cart</a>&nbsp;&nbsp;
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button onClick={closeMenu}>x</button>
          <ul>
            <li>
            </li>
            <li>
              <a href="/">➡️ Jumpsuits</a>
            </li>
            <li>
              <a href="/">➡️ Shorts</a>
            </li>
            <li>
              <a href="/">➡️ T-shirts</a>
            </li>
            <li>
              <a href="/">➡️ Jeans</a>
            </li>
            <li>
              <a href="signin"><h1>➡️ Sign In</h1></a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">

            {/* routes container contains multiple route inside itself  */}
            
            <Routes>
              <Route path="/product/:id" element={<ProductScreen  />} /> 
              <Route path="/cart/:id?" element={<CartScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/" exact={true} element={<HomeScreen filteredProducts={filteredProducts} />} />
              <Route path="/" exact={true} element={<HomeScreen />} />
            </Routes>

          </div>
        </main>
        <footer className="footer">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
