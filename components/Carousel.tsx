"use client";

// External libraries
import React from "react";
import Slider from "react-slick";

// Images
import busBoyis from "/public/images/youtube-cover/bus-boyis.jpg";
import busNoMatterWhat from "/public/images/youtube-cover/bus-nmtw.webp";
import busWatchYourStep from "/public/images/youtube-cover/bus-wys.jpg";

// Styles
import "@/styles/react-slick.css";

// Local components
import CarouselImage from "@/components/CarouselImage";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    slidegap: 5,
    appendDots: (dots: React.ReactElement) => (
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => <button className=""></button>,
  };

  return (
    <div className="w-full lg:w-2/3">
      <Slider {...settings} className="overflow-hidden rounded-md">
        <CarouselImage
          src={busNoMatterWhat}
          alt="bus no matter what mv cover"
        />
        <CarouselImage
          src={busBoyis}
          alt="bus because of you i shine mv cover"
        />
        <CarouselImage
          src={busWatchYourStep}
          alt="bus watch your step mv cover"
        />
      </Slider>
    </div>
  );
}
