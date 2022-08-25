import React, { Fragment } from "react";
import "./Footer.css";
import logo from "./logo.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <div className="img">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              temporibus! Quam eveniet quae ullam, odio corporis fugiat,
              explicabo mollitia blanditiis iste illo ex.
            </p>
            <div className="share">
              <a href="/" className="btn fab fa-facebook-f">
                <i></i>
              </a>
              <a href="/" className="btn fab fa-twitter">
                <i></i>
              </a>
              <a href="/" className="btn fab fa-instagram">
                <i></i>
              </a>
              <a href="/" className="btn fab fa-linkedin">
                <i></i>
              </a>
            </div>
          </div>

          {/* <div className="box">
            <h3>our location</h3>
            <div className="links">
              <a href="/">India</a>
              <a href="/">Dubai</a>
            </div>
          </div> */}

          <div className="box">
            <h3 className="categories">Categories</h3>
            <div className="link">
              <div className="links">
                <a href="/">shop by intention</a>
                <a href="/">crystals</a>
                <a href="/">bracelets</a>
                <a href="/">cyrstal kit</a>
                <a href="/">malas</a>
                <a href="/">soap</a>
                <a href="/">eco friendly candles</a>
              </div>
              <div className="links">
                <a href="/">anklet</a>
                <a href="/">pocket crystal</a>
                <a href="/">crystal pendant</a>
                <a href="/">books</a>
                <a href="/">gift hampers</a>
                <a href="/">cleansing</a>
                <a href="/">himalayan salt products</a>
              </div>
            </div>
          </div>
          {/* "shop by intention","crystals","bracelets","cyrstal kit","malas","soap","eco friendly candles","anklet","pocket crystal","crystal pendant","books","gift hampers","cleansing","himalayan salt products" */}
          <div className="box ">
            <h3>Quick Links</h3>
            <div className="links">
              <a href="/">home</a>
              <a href="/">therapy classes</a>
              <a href="/">about us</a>
              <a href="/">FAQ</a>
              <a href="/">contact us</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
