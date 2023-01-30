import { useContext, useEffect, useState } from "react"
import { AiOutlineEye } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { ContextData } from "../context/ContextData"
import { Footer } from "../Footer";
import BasicRating from "../layouts/StarRating";
import { Navbar } from "../Navbar";
import { Skeleton } from "../skeleton/SkeletonST";

export function Bags() {

    const { bagsInfo, likeFunc, basketFunc, aboutPFunc } = useContext(ContextData);

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
            <Navbar text={'Bags'} invisibleInp={'invisibleInp'} modal={'modalInv'} />
            <div className="bags h_section3">
                <h1>Bags Products</h1>
                <div className="bS_wrapper">
                    {
                        loading ?
                            <div className="skeleton3">
                                <Skeleton type='skeleton4' />
                            </div> :
                            bagsInfo.map(item => (
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
                                        <h4><span>${item.price}</span><del>${item.prev}</del><span>{item.per}% OFF</span></h4>
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