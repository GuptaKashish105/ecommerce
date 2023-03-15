import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  console.log(location.search);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter details correctly!");
    } else {
      alert("You are successfully logged in! HAPPY SHOPPING!!");
      console.log("Your Email is: " + email + " and your password is: " + password);
      navigate(redirect);
      console.log(redirect);
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3 className="signinH">Sign In</h3>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your Email"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter your Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="buttonn primary">
              Sign In
            </button>
          </li>
          <li className="li">New to Amazon?</li>
          <li>
            <Link to={redirect === "/" ? "/register" : "/register?redirect=" + redirect} className="buttonn secondary text-center">
              Create your Amazon account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninScreen;
