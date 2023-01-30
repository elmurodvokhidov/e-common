import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carusel() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <figure><img src="./img/Product Picture01.png" alt="image1" /></figure>
                </div>
                <div>
                    <figure><img src="./img/Product Picture02.png" alt="image2" /></figure>
                </div>
                <div>
                    <figure><img src="./img/Product Picture03.png" alt="image3" /></figure>
                </div>
            </Slider>
        </div>
    );
}