import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="/home">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1651499833228-bcba89d83847?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696"
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/products">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1650905481517-248a970e9b87?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696"
            alt="Second slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/therapy-classes">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1628375155785-d3aa885a8e94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
