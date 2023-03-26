import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bottom-logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="Little Lemon logo" />
        </div>
        <nav className="doormat-nav">
          <ul className="navigation">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* <li>
              <a href="/contact">Contact Us</a>
            </li> */}
          </ul>
        </nav>
        <div className="contact-details">
          <p>Address: 1234 N State St, Chicago, IL 60601</p>
          <p>Phone: 555-123-7537</p>
          <p>Email: info@restaurant.com</p>
        </div>
        <div className="social-media-links">
          <Link to="/login" className="socials">
            Facebook{" "}
          </Link>
          <Link to="/login" className="socials">
            {" "}
            Twitter{" "}
          </Link>
          <Link to="/login" className="socials">
            {" "}
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
