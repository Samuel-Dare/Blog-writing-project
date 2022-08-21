import React from "react";
import { Link, Navlink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top button navbar-expand-lg">
      <div className="container-fluid">
        <a className="text navbar-brand">
          <span>
            <Link to="/">
              <img src="Images/Postit 1.png" alt="" />{" "}
            </Link>{" "}
          </span>
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/Stories">
              <a className="text nav-link" aria-current="page">
                Stories
              </a>{" "}
            </Link>

            <Link to="/CreateStory">
              <a className="text nav-link">Tell it </a>{" "}
            </Link>

            <Link to="/SignIn">
              {" "}
              <a className="text nav-link">Sign In</a>
            </Link>
            <a className="text nav-link">
              <Link to="/SignUp">
                {" "}
                <button className="text nav-link2">Get Started</button>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
