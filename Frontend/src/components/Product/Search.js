import React, { useState, Fragment } from "react";
import MetaData from "../Layout/MetaData";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
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
    <Fragment>
      <MetaData title="Search A Product -- Utsavaa" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button className="Btn">Search</button>
      </form>
    </Fragment>
  );
};

export default Search;
