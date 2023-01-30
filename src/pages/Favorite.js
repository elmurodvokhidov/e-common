import { useContext } from "react"
import { AiOutlineEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { SlBasket } from "react-icons/sl";
import { ContextData } from "../context/ContextData"
import { Footer } from "../Footer";
import BasicRating from "../layouts/StarRating";
import { Navbar } from "../Navbar";

export function Favorite() {

    const { info, unlikeFunc, basketFunc, aboutPFunc } = useContext(ContextData);

    return (
        <>
            <Navbar text={'Favorite'} invisibleInp={'invisibleInp'} modal={'modalInv'} />
            <div className="favorite">
                <h1>Favorite Product</h1>
                <div className="s_cardWrapper fP_wrapper">
                    {
                        info[0].favorite.length > 0 ?
                            info[0].favorite.map((item, index) => (
                                <div className="bS_card sCW_card" key={index}>
                                    <div className="bSC_img">
                                        <div className="bSCI_modal">
                                            <div className="bSCIM_icons">
                                                <button className="likeIcon" onClick={() => unlikeFunc(item)}><span><FcLike /></span></button>
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
                            )) : <div className="pardon"><h2>Oops! You have no favorites!</h2></div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
};