import React, { useEffect } from "react";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCrystalsProducts } from "../../actions/productAction";
import ProductCard from "../Home/ProductCard";

const Crystals = () => {
  const dispatch = useDispatch();

  const { productCrystals } = useSelector((state) => state.productsByCategory);

  useEffect(() => {
    dispatch(getAllCrystalsProducts());
  }, [dispatch]);

  return (
    <>
      <div className="products">
        {productCrystals &&
          productCrystals.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Crystals;
