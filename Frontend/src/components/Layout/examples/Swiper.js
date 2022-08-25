import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsList } from "../../../actions/productAction";
import ProductCard from "../../Home/ProductCard";

export default function App() {
  const dispatch = useDispatch();
  const { error, totalProductsList } = useSelector(
    (state) => state.productsList
  );

  useEffect(() => {
    if (error) {
      return error(error);
    }
    dispatch(getAllProductsList());
  }, [dispatch, error]);
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {totalProductsList &&
          totalProductsList.slice(0, 15).map((product) =>
            product.category === "Crystals" ? (
              <SwiperSlide>
                <ProductCard key={product._id} product={product} />{" "}
              </SwiperSlide>
            ) : undefined
          )}
      </Swiper>
    </>
  );
}
