import React from "react";
import { Link } from "react-router-dom";
// import Router from "./Router";
import logo from "../assets/top-logo.png";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Little Lemon logo" />
          </Link>
        </div>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
