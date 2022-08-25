import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
// import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Carousels from "../Layout/examples/Carousel";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";
import MetaData from "../Layout/MetaData";
import {
  getAllBracelets,
  getAllCrystalsProducts,
  getAllMalas,
} from "../../actions/productAction";
import CategoriesCarousel from "./CategoriesCarousel";
import Newsletter from "../Newsletter/Newsletter";

// image url -  http://i.ibb.co/DRST11n/1.webp

const Home = () => {
  const dispatch = useDispatch();

  const { error, loading, productCrystals } = useSelector(
    (state) => state.productsByCategory
  );
  const { productBracelets } = useSelector((state) => state.productsBracelets);
  const { productMalas } = useSelector((state) => state.productMalas);

  useEffect(() => {
    if (error) {
      return error(error);
    }

    dispatch(getAllCrystalsProducts());
    dispatch(getAllBracelets());
    dispatch(getAllMalas());
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading ? (
        Loader
      ) : (
        <Fragment>
          <MetaData title="Home -- Utsavaa" />
          <Carousels />
          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">All Categories</h2>
            </div>
            <div className="container" id="container">
              <CategoriesCarousel />
            </div>
          </div>

          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">Crystals</h2>
              <Link to="/products/crystals" className="Btn">
                View All
              </Link>
            </div>
            <div className="container" id="container">
              {productCrystals &&
                productCrystals
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
            </div>
          </div>

          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">Bracelets</h2>
              <Link to="/products/bracelets" className="Btn">
                View All
              </Link>
            </div>
            <div className="container" id="container">
              {productBracelets &&
                productBracelets.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>

          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">Malas</h2>
              <Link to="/products/malas" className="Btn">
                View All
              </Link>
            </div>
            <div className="container" id="container">
              {productMalas &&
                productMalas.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
          <Newsletter />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
