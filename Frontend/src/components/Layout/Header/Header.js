import React, { useState } from "react";
import logo from "./logo.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction";

function Header() {
  const dispatch = useDispatch();
  // when scroll header at top
  window.addEventListener("scroll", function () {
    const mid_nav = document.querySelector(".mid-nav");
    mid_nav.classList.toggle("active", window.scrollY > 100);
  });

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 100);
  });

  // toggle menu

  const { cartItems } = useSelector((state) => state.cart);

  const [Mobile, setMobile] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  // Search toggle
  const history = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    // e.preventDefault(); // When submit Reload will not happen
    if (keyword.trim()) {
      history(`/products/${keyword}`);
    } else {
      history("/products");
    }
  };

  return (
    <div>
      <header className="header" id="header">
        <div className="banner">
          <p>
            Use code: SUMMER10 to Avail 10% Discount | Free Shipping Above INR
            999/-
          </p>
        </div>

        {/* <input type="checkbox" id="showForm" />
        <label for="showForm" className="search_item"></label>
        <LoginSignUp /> */}

        <div className="navbar">
          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open "></i>
            )}
          </button>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="mid-nav">
            <ul
              className={Mobile ? "nav-links-mobile" : "nav"}
              onClick={() => setMobile(false)}
            >
              <li>
                <Link to="/">
                  all gifts <i className="fa-solid fa-angle-down"></i>
                </Link>
              </li>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/therapy-classes">therapy classes</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact-us">contact us</Link>
              </li>
            </ul>
          </div>

          <div className="right_nav">
            <input type="checkbox" id="showSearch" />
            <label for="showSearch" className="search_item">
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>

            <div className="searchBoxMain">
              <form className="searchBox1" onSubmit={searchSubmitHandler}>
                <input
                  type="text"
                  placeholder="Search a Product ..."
                  onChange={(e) => setKeyword(e.target.value)}
                />

                <button className="btn">Search</button>
              </form>
            </div>
            {/* <div className="signInBtn"> */}

            {/* <input type="checkbox" id="showForm" />
            <label for="showForm" className="search_item"></label>
            <LoginSignUp /> */}

            <Link to="/login" className="signInBtn">
              {isAuthenticated ? (
                <img
                  className="speedDialIcon"
                  src={user.avatar.url}
                  alt="Profile"
                />
              ) : (
                <i className="fa-solid fa-circle-user"></i>
              )}
              <span>
                {isAuthenticated ? (
                  <ul className="signInBtnUl">
                    {user.role === "admin" ? (
                      <li className="signInA">
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </li>
                    ) : undefined}

                    <li className="signInA">
                      <Link to="/orders">Orders</Link>
                    </li>

                    <li className="signInA">
                      <Link to="/account">Account</Link>
                    </li>

                    <li className="signInA">
                      <Link to="/cart">Cart</Link>
                    </li>

                    <li
                      className="signInA"
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      <Link to="/">Logout</Link>
                    </li>
                  </ul>
                ) : (
                  "Sign In"
                )}
              </span>
            </Link>

            {/* </div> */}
            <Link to="/cart" className="cartBtn">
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItems.length > 0 ? (
                <input
                  readOnly
                  className="cartValue"
                  type="text"
                  value={cartItems.length}
                />
              ) : undefined}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
