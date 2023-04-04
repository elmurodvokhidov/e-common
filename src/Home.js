import { useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { ContextData } from "./context/ContextData";
import { Footer } from "./Footer";
import BasicRating from "./layouts/StarRating";
import { Navbar } from "./Navbar";
import { Skeleton } from "./skeleton/SkeletonST";
import { FcLike } from "react-icons/fc";

export function Home() {

    const {
        BestSeller,
        loadMFunc,
        info,
        allInfo,
        likeFunc,
        basketFunc,
        aboutPFunc } = useContext(ContextData);

    // Loader State
    const [loading, setLoading] = useState(false);

    // Loader Timer
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const [clock, setClock] = useState([]);

    function clockFunc() {
        setClock([{
            hour: `${new Date().getHours()}`,
            minute: `${new Date().getMinutes()}`,
            seconds: `${new Date().getSeconds()}`
        }])
    }

    useEffect(() => {
        setInterval(() => {
            clockFunc();
        }, 1000);
    }, []);

    return (
        <>
            <Navbar invisible={'invisible'} />
            <div className="home">

                {/* Phone Screen Only */}
                <div className="h_section0">
                    <img src="./img/PromotionImagePhone.png" alt="PromotionImagePhone.png" />
                    <h1>Super Flash Sale 50% Off</h1>
                    {
                        clock.map((a, b) => (
                            <div className="discountTime" key={b}>
                                <div className="hour">{a.hour < 10 ? '0' + a.hour : a.hour}</div>
                                <span>:</span>
                                <div className="hour minut">{a.minute < 10 ? '0' + a.minute : a.minute}</div>
                                <span>:</span>
                                <div className="hour secund">{a.seconds < 10 ? '0' + a.seconds : a.seconds}</div>
                            </div>
                        ))
                    }
                </div>

                {/* SECTION 1 */}
                <div className="h_section1">
                    <h1>Super Flash Sale 50% Off</h1>
                </div>

                {/* SECTION */}
                <div className="h_section">
                    {/* SECTION 2 */}
                    <div className="h_section2">
                        <div className="hS2_wrapper">
                            {/* Card 1 */}
                            <div className="hS2W_card hS2W_card1">
                                <div className="hS2WC_header">
                                    <h3>FS - QUILTED MAXI CROSS BAG</h3>
                                </div>
                                <div className="hS2WC_img">
                                    <img src="./img/imageProduct.png" alt="imageProduct.png" />
                                </div>
                                <div className="hS2WC_main">
                                    <h4><del>$534,33</del><span>24% Off</span></h4>
                                </div>
                                <div className="hS2WC_footer">
                                    <h2>$299,43</h2>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="hS2W_card hS2W_card2">
                                <div className="hS2WC_header">
                                    <h3>FS - Nike Air Max 270 React...</h3>
                                    <h2>$299,43</h2>
                                </div>
                                <div className="hS2WC_img">
                                    <img src="./img/imageProduct1.png" alt="imageProduct1.png" />
                                </div>
                                <div className="hS2WC_footer">
                                    <h4><del>$534,33</del><span>24% Off</span></h4>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="hS2W_card hS2W_card3">
                                <div className="hS2WC_header">
                                    <h3>FS - Nike Air Max 270 React...</h3>
                                    <h4><del>$534,33</del><span>24% Off</span></h4>
                                </div>
                                <div className="hS2WC_img">
                                    <img src="./img/imageProduct2.png" alt="imageProduct2.png" />
                                </div>
                                {/* <div className="hS2WC_main">
                            </div> */}
                                <div className="hS2WC_footer">
                                    <h2>$299,43</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3 */}
                    <div className="h_section3">
                        {/* Header */}
                        <div className="hS3_top">
                            <h1>BEST SELLER</h1>
                            <ul className="hS3T_pages">
                                <li>
                                    <NavLink to={'/all'}>All</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/bags'}>Bags</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sneakers'}>Sneakers</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/belt'}>Belt</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sunglasses'}>Sunglasses</NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Main */}
                        <div className="hS3_main">

                            {
                                loading ?
                                    <div className="skeleton3">
                                        <Skeleton type='skeleton3' />
                                    </div> :
                                    info[0].loadMore ?
                                        <BestSeller />
                                        :
                                        <div className="allInfo bS_wrapper">
                                            {
                                                allInfo.map((item, index) => (
                                                    <div className="bS_card" key={index}>
                                                        <div className="bSC_img">
                                                            <div className="bSCI_modal">
                                                                <div className="bSCIM_icons">
                                                                    <button className="likeIcon" onClick={() => likeFunc(item)}>{info[0].favorite.filter(a => a.id === item.id).length === 0 ? <span><AiOutlineHeart /></span> : <span><FcLike /></span>}</button>
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
                            }
                        </div>

                        {/* Footer */}
                        <div className="hS3_bottom">
                            <button onClick={loadMFunc}>{info[0].loadMore ? 'LOAD MORE' : 'SHORTEN'}</button>
                        </div>
                    </div>
                </div>

                {/* SECTION 4 */}
                <div className="h_section4">
                    <div className="hS4_left">
                        <h1>Adidas Men Running Sneakers</h1>
                        <div className="hS4L_bottom">
                            {/* <p>Performance and design. Taken right to the edge.</p> */}
                            <p>Get a 50% discount by entering the <b>'NewYear'</b> promo code</p>
                            <span><NavLink to={'/'}>SHOP NOW</NavLink></span>
                        </div>
                    </div>

                    <div className="hS4_right">
                        <figure>
                            <img src="./img/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" alt="shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" />
                        </figure>
                    </div>
                </div>

                {/* Phone screen only */}
                <div className="megaSale">
                    {/* <img src="./img/promoCode.png" alt="promoCode.png" /> */}
                    <h1>Get a 50% discount by entering the <b>'NewYear'</b> promo code</h1>
                </div>

                {/* SECTION 5 */}
                <div className="h_section5">
                    <div className="hS5_wrapper">
                        {/* Card 1 */}
                        <div className="hS5W_card">
                            <figure className="hS5WC_img">
                                <img src="./img/shipping1.png" alt="shipping1.png" />
                            </figure>
                            <div className="hS5WC_title">
                                <h2>FREE SHIPPING</h2>
                            </div>
                            <div className="hS5WC_about">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="hS5W_card">
                            <figure className="hS5WC_img">
                                <img src="./img/Group 11.png" alt="Group 11.png" />
                            </figure>
                            <div className="hS5WC_title">
                                <h2>100% REFUND</h2>
                            </div>
                            <div className="hS5WC_about">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="hS5W_card">
                            <figure className="hS5WC_img">
                                <img src="./img/support.png" alt="support.png" />
                            </figure>
                            <div className="hS5WC_title">
                                <h2>SUPPORT 24/7</h2>
                            </div>
                            <div className="hS5WC_about">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 6 */}
                <div className="h_section6">
                    {/* Top */}
                    <div className="hS6_top">
                        <h1>LATEST NEWS</h1>
                        <div className="hS6T_wrapper">
                            {/* Card 1 */}
                            <div className="hS6TW_card">
                                <figure className="hS6TWC_img">
                                    <img src="./img/Nike_logo_emblem_logotype 1.png" alt="Nike_logo_emblem_logotype 1.png" />
                                </figure>
                                <div className="hS6TWC_right">
                                    <h3>01 Jan, 2015</h3>
                                    <div className="hS6TWCR_title">
                                        <h2>Fashion Industry</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="hS6TW_card">
                                <figure className="hS6TWC_img">
                                    <img src="./img/figma-1-logo 1.png" alt="figma-1-logo 1.png" />
                                </figure>
                                <div className="hS6TWC_right">
                                    <h3>01 Jan, 2015</h3>
                                    <div className="hS6TWCR_title">
                                        <h2>Best Design Tools</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="hS6TW_card">
                                <figure className="hS6TWC_img">
                                    <img src="./img/kronos-logo-1-1 1.png" alt="kronos-logo-1-1 1.png" />
                                </figure>
                                <div className="hS6TWC_right">
                                    <h3>01 Jan, 2015</h3>
                                    <div className="hS6TWCR_title">
                                        <h2>HR Community</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="hS6_top hS6_bottom">
                        <h1>FEATURED PRODUCTS</h1>
                        <div className="hS6T_wrapper hS6B_wrapper">
                            {/* Card 1 */}
                            <div className="hS6BW_card">
                                <figure className="hS6BWC_img">
                                    <img src="./img/Vector.png" alt="Vector.png" />
                                </figure>
                                <div className="hS6BWC_right">
                                    <h2>Blue Swade Nike Sneakers</h2>
                                    <div className="starRating">
                                        <BasicRating />
                                    </div>
                                    <h4>$499 <del>$599</del></h4>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="hS6BW_card">
                                <figure className="hS6BWC_img">
                                    <img src="./img/Vector.png" alt="Vector.png" />
                                </figure>
                                <div className="hS6BWC_right">
                                    <h2>Blue Swade Nike Sneakers</h2>
                                    <div className="starRating">
                                        <BasicRating />
                                    </div>
                                    <h4>$499 <del>$599</del></h4>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="hS6BW_card">
                                <figure className="hS6BWC_img">
                                    <img src="./img/Vector.png" alt="Vector.png" />
                                </figure>
                                <div className="hS6BWC_right">
                                    <h2>Blue Swade Nike Sneakers</h2>
                                    <div className="starRating">
                                        <BasicRating />
                                    </div>
                                    <h4>$499 <del>$599</del></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hS6_search">
                        <div className="hS6S_content">
                            <input type="text" name="hS6Search" id="hS6Search" placeholder="Search query..." />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};