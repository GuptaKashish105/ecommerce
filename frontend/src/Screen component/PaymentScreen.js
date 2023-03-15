import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "../components/Checkout";

const PaymentScreen = () => {
  
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Please check the radio button to make payment!");
    } else {
      navigate("/placeorder");
    }
  };

  return (
    <div>
      <Checkout steps1={true} steps2={true} steps3={true} steps4={false} />
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h3 className="shipping">Payment</h3>
            </li>
            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="gpay"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="address">GPay</label>
              </div>
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

export default PaymentScreen;
