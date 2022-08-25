import React, { Fragment } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <Fragment>
      <div id="mainContact">
        <div className="mainContact_1">
          <div>
            <h2>
              <i className="fa-solid fa-phone"></i> Contact Info
            </h2>
            <div className="contactContent">
              <p>+91 999 999 9999</p>
              <p>+91 999 999 9998</p>
            </div>
          </div>

          <div>
            <h2>
              <i className="fa-regular fa-envelope"></i> Email
            </h2>
            <div className="contactContent">
              <p>test123@123.com</p>
            </div>
          </div>

          <div>
            <h2>Address</h2>
            <div className="contactContent">
              <p>Mumbai, India</p>
            </div>
          </div>

          <div>
            <h2>Social</h2>
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
        </div>

        <form action="" className="mainContact_2">
          <h1>GET IN TOUCH WITH US</h1>
          <p>
            Give us a call, send us an email to have a chat, we are always here
            to help out in whatever way we can.
          </p>

          <input type="text" placeholder="name" className="box" name="name" />
          <input
            type="email"
            placeholder="email"
            className="box"
            name="email"
          />
          <input
            type="number"
            placeholder="phone"
            className="box"
            name="phone"
          />
          <textarea
            name="message"
            placeholder="message"
            className="box"
            cols="15"
            rows="6"
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactUs;
