import React from "react";
import { Link } from "react-router-dom";
import "../pagescss/Navbar.css";
import Login from "../Buttons/Login";
import Register from "../Buttons/Register";
import CartBtn from "../Buttons/CartBtn";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-2">
          <Link className="navbar-brand mx-auto fw-bold" to="/">
            Mobile App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Proudct
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Register />
            <Login />
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
