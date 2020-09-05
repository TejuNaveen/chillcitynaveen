import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "./images/1.jpg";
import imageTwo from "./images/2.jpg";
import imageThree from "./images/3.jpg";
import './Slider.scss'

export default class Slider extends Component {
  render() {
    return (
      <Carousel
        autoPlay={3000}
        animationSpeed={2000}
        infinite
        stopAutoPlayOnHover
        keepDirectionWhenDragging
      >
        <img src={imageOne} alt="1" className="image-1"/>
        <img src={imageTwo} alt="2" className="image-2"/>
        <img src={imageThree} alt="3" className="image-3"/>
      </Carousel>
    );
  }
}
