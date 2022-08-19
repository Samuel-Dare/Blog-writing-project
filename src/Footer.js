import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="row mt-5">
      <section className="col-lg-4">
        <h4>About Post</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem facilis nesciunt, possimus pariatur earum nihil
          perspiciatis quis similique magni porro praesentium maiores
          asperiores! Nulla pariatur aliquam consequuntur sequi quos aut!
        </p>
      </section>
      <section className="col-lg-4 row">
        <section className="col-lg-6">
          <h4>Quick Menu</h4>
          Home
          <br />
          Stories
          <br />
          Trending Stories
          <br />
          Popular Stories
        </section>
        <section className="col-lg-6">
          <br /> <br />
          Sign Up
          <br />
          Log In
          <br />
          Contact Us
          <br />
        </section>
      </section>
      <section className="col-lg-4">
        <h4>Subscribe to our newsletter</h4>
        <div className="div-input">
          <input type="text" placeholder="Enter Email address" />
          <button>Subscribe</button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
