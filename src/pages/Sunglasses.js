import { useContext } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { ContextData } from "../context/ContextData"
import BasicRating from "../layouts/StarRating";
import { Skeleton } from "../skeleton/SkeletonST";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

export function Sunglasses() {

    const { sunglassesInfo, likeFunc, basketFunc, aboutPFunc } = useContext(ContextData);

    // Loader State
    const [loading, setLoading] = useState(false);

    // Loader Timer
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            <Navbar text={'Belt'} invisibleInp={'invisibleInp'} modal={'modalInv'} />
            <div className="bags h_section3">
                <h1>Sunglasses Products</h1>
                <div className="bS_wrapper">
                    {
                        loading ?
                            <div className="skeleton3">
                                <Skeleton type='skeleton4' />
                            </div> :
                            sunglassesInfo.map(item => (
                                <div className="bS_card bags_card" key={item.id}>
                                    <div className="bSC_img">
                                        <div className="bSCI_modal">
                                            <div className="bSCIM_icons">
                                                <button className="likeIcon" onClick={() => likeFunc(item)}><span><FaRegHeart /></span></button>
                                                <button className="likeIcon basketIcon" onClick={() => basketFunc(item)}><span><SlBasket /></span></button>
                                                <button className="likeIcon basketIcon" onClick={() => aboutPFunc(item)}><span><AiOutlineEye /></span></button>
                                            </div>
                                        </div>
                                        <img src={item.img} alt={item.img} />
                                    </div>
                                    <div className="bSC_title">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="starRating">
                                        <BasicRating />
                                    </div>
                                    <div className="bSC_footer">
                                        <h4><span>${item.price * (100 - item.discount) / 100}</span><del>${item.price}</del><span>{item.discount}% OFF</span></h4>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
};