import React, { Fragment } from "react";
import "./CategoriesCarousel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const CategoriesCarousel = () => {
  return (
    <Fragment>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="/products/crystals">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/duormjcef/image/upload/v1652706860/utsavaa/cfbwisfatlilim9mbro9.png"
              alt="First slide"
            />
            <h1>Crystals</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/bracelets">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/duormjcef/image/upload/v1652706785/utsavaa/jkycypyckefby44orpot.png"
              alt="Second slide"
            />
            <h1>Bracelets</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/malas">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/duormjcef/image/upload/v1652698983/utsavaa/xtt56smmsg3s17kmncqe.png"
              alt="Third slide"
            />
            <h1>Malas</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/Candles">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/duormjcef/image/upload/v1652706860/utsavaa/cfbwisfatlilim9mbro9.png"
              alt="Third slide"
            />
            <h1>Candles</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/book">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/duormjcef/image/upload/v1652796797/utsavaa/jd5je6fnh5e6y2md1utq.png"
              alt="Third slide"
            />
            <h1>Book</h1>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="/hamper">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/duormjcef/image/upload/v1652659886/utsavaa/te6grsuathpsguvcmzzc.png"
              alt="Third slide"
            />
            <h1>Hamper</h1>
          </a>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default CategoriesCarousel;
