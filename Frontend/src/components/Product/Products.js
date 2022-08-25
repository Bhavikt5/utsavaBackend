import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import { Slider, Rating } from "@mui/material";
import MetaData from "../Layout/MetaData";
import { useParams } from "react-router-dom";

const categories = [
  "Shop by intention",
  "Crystals",
  "Bracelets",
  "Cyrstal kit",
  "Malas",
  "Soap",
  "Eco friendly candles",
  "Anklet",
  "Pocket crystal",
  "Crystal pendant",
  "Books",
  "Gift hampers",
  "Cleansing",
  "Himalayan salt products",
];

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="section">
            <div className="filter">
              <div className="filterBox">
                <h5>Price</h5>
                <Slider
                  className="price"
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  min={0}
                  max={5000}
                />

                <h5>Categories</h5>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>

                <fieldset>
                  <h5 component="legend">Ratings Above</h5>

                  <Rating
                    name="simple-controlled"
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating);
                    }}
                  />
                </fieldset>
              </div>
            </div>
            <div className="productSection">
              <div className="products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>

              {resultPerPage < productsCount && (
                <div className="paginationBox">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
