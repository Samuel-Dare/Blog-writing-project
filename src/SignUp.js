import React from "react";
import { Link, Navlink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-body">
      <div className="container">
        <h1 className="my-5 3">Join Postit</h1>
        <h5 className="my-3">
          Enter your email, username and password to create an account on Postit
        </h5>
        <div className="registration">
          <form className="login-form" action="">
            <input type="text" className="input-field" placeholder="Email" />
            <input
              type="username"
              className="input-field"
              placeholder="Choose a username"
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
            />

            <Link to="/CreateStory">
              <button type="submit" className="submit-btn my-3">
                Sign Up
              </button>
            </Link>
          </form>

          <form action=""></form>
        </div>
        <p className="sign-up-link my-5 mx-auto">
          Already have an account? <a href="">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
