import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReEnterPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // new state variable for showing/hiding password

  const navigate = useNavigate();

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !reenterpassword || !name) {
      alert("Please enter all the details correctly!");
    } else if (password !== reenterpassword) {
      setPasswordMatch(false);
    } else {
      console.log(passwordMatch);
      alert("You are successfully logged in! HAPPY SHOPPING!!");
      console.log("User name is: " + name + ", User Email is: " + email + " and the password is: " + reenterpassword);
      navigate(redirect);
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3 className="registerH">Registration</h3>
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your name"
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <div style={{display: "flex"}}>
              <input
                placeholder="Enter your Password"
                type={showPassword ? "text" : "password"} // change input type based on showPassword state
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="checkbox"
                onClick={() => setShowPassword(!showPassword)} // toggle showPassword state
                style={{marginLeft: 10}}
              />
              <label htmlFor="showPassword" style={{marginLeft: 5}}>Show Password</label>
            </div>
          </li>
          <li>
            <label htmlFor="reenterpassword">Re-enter Password</label>
            <input
              placeholder="Enter your Password again"
              type="password"
              name="reenterpassword"
              id="password"
              onChange={(e) => setReEnterPassword(e.target.value)}
            />
            {!passwordMatch && <div>Passwords do not match</div>} {/* show error message if passwords don't match */}
          </li>
          <li>
            <button type="submit" className="buttonn primary">
              Register
            </button>
          </li>
          <li className="signinR">
            <div>
            Already have account?
            <Link to={redirect === "/" ? "/signin" : "/signin?redirect=" + redirect} className="buttonn secondary text-center">
              Sign-In
            </Link>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RegisterScreen;
