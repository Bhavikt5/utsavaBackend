import React from "react";
import "./Loader.css";
import logo from "./logo.png";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <img src={logo} alt="" className="loadingImg" />
    </div>
  );
};

export default Loader;
