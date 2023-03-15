import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "../components/Checkout";

const ShippingScreen = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!city || !postalCode || !country || !address) {
      alert("Please enter all the details correctly!");
    } else {
      navigate("/payment");
    }
  };

  return (
    <div>
        <Checkout steps1={true} steps2={true} steps3={false} steps4={false} />
        <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3 className="shipping">Shipping</h3>
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input
              placeholder="Enter your address"
              type="text"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
          <li>
           <label htmlFor="city">City</label>
            <input
              placeholder="Enter your city"
              type="text"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="postal code">Postal Code</label>
            <input
              placeholder="Enter your postal code"
              type="text"
              name="postal code"
              id="postal-code"
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <input
              placeholder="Enter your country"
              type="text"
              name="country"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="buttonn primary">
              Continue
            </button>
          </li>
        </ul>
      </form>
    </div>
    </div>
  );
};

export default ShippingScreen;
