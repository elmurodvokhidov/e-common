import React, { Component } from "react";
import Slider from "react-slick";

export function PhoneCarousel(prop) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="phoneCarouselWrapper">
            <Slider {...settings}>
                <div>
                    <img src={prop.img} alt={prop.img} />
                </div>
                <div>
                    <img src="./img/Product Picture02.png" alt="Product Picture02.png" />
                </div>
                <div>
                    <img src="./img/Product Picture01.png" alt="Product Picture01.png" />
                </div>
                <div>
                    <img src={prop.img} alt={prop.img} />
                </div>
                <div>
                    <img src="./img/imageProduct6.png" alt="imageProduct6.png" />
                </div>
            </Slider>
        </div>
    );
}