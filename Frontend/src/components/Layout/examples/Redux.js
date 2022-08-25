import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Product/Products.css";
import ProductCard from "../../Home/ProductCard";
import { getProduct } from "../../../actions/productAction";

const Redux = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <div className="product" id="product">
        <h2 className="homeHeading">All Products</h2>
        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Redux;
