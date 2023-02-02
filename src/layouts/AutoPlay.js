import React from "react";
import Slider from "react-slick";
import BasicRating from "./StarRating";

export function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 500,
        autoplaySpeed: 500,
        cssEase: "linear"
    };
    return (
        <div className="autoPlay">
                <div className="aP_card">
                    <figure className="aP_img"><img src="./img/Product Picture01.png" alt="image1" /></figure>
                    <div className="aPC_footer">
                        <div className="starRating">
                            <BasicRating />
                        </div>
                        <div className="bSC_footer">
                            <h4><span>$499</span><del>$599</del></h4>
                        </div>
                    </div>
                </div>
        </div>
    );
}