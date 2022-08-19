import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="form-body">
      <div className="container">
        <h1 className="my-5 3">Welcome Back</h1>
        <h5 className="my-3">Enter your username and password</h5>
        <div className="registration">
          <form className="login-form" action="">
            <input type="text" className="input-field" placeholder="Email" />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
            />

            <button type="submit" className="submit-btn my-3">
              Log in
            </button>
          </form>

          <form action=""></form>
        </div>
        <p className="sign-up-link my-5 mx-auto">
          No account? <a href="">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
