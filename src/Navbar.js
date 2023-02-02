import { NavLink, Route, Routes } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { BsInfo, BsPerson } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineSearch, AiFillCaretDown, AiOutlineHeart, AiOutlineLeft } from "react-icons/ai";
import { useContext } from "react";
import { ContextData } from "./context/ContextData";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export function Navbar(prop) {

    const { basketInfo, info, profileFunc, homeLink } = useContext(ContextData);

    const [modalFP, setModalFP] = useState(false);

    return (
        <>
            {/* Phone Navbar */}
            <div className="phoneNavbar">
                <div className="variable" id={prop.invisible}>
                    <button onClick={() => homeLink('/')}><span><AiOutlineLeft /></span></button>
                    <h1>{prop.text}</h1>
                </div>
                <div className="hamburger" id={prop.modal} onClick={() => setModalFP(true)}><span><HiOutlineMenu /></span></div>
                <div className="pN_input" id={prop.invisibleInp}>
                    <label htmlFor="search"><AiOutlineSearch /></label>
                    <input type="text" name="search" id="search" placeholder="Search Product" />
                </div>
                <ul className="pN_right">
                    <li className="iconPerson" onClick={profileFunc}><span><BsPerson /></span></li>
                    <li><NavLink to={'/basket'} className="basketNavIcon"><span><SlBasket /></span><span>{info[0].basket.length}</span></NavLink></li>
                    <li className="items"><NavLink to={'/favorite'} className="favoriteLink"><span><AiOutlineHeart /></span><span>{info[0].favorite.length}</span></NavLink></li>
                </ul>
                {/* Modal Window */}
                {
                    modalFP ?
                        <div className="modalFP">
                            <div className="mFP_header">
                                {/* logo */}
                                <div className="logo">
                                    <NavLink to={'/'}>
                                        <figure><img src="./img/Icon.png" alt="Icon.png" /></figure>
                                        <h3>E-Comm</h3>
                                    </NavLink>
                                </div>
                                {/* back */}
                                <button onClick={() => setModalFP(false)}><span><IoIosClose /></span></button>
                            </div>
                            <div className="mFP_footer">
                                {/* link */}
                                <ul>
                                    <li><NavLink to={'/hotdeal'}>HOT DEAL</NavLink></li>
                                    <li>
                                        <NavLink to={'/bags'}>BAGS</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/sneakers'}>SNEAKERS</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/belt'}>BELT</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/contact'}>CONTACT</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        : ''
                }
            </div>
            {/* Default Navbar */}
            <div className="navbar">
                {/* Navbar 'ning yuqori qismi */}
                <div className="n_header">
                    <div className="nH_left">
                        <div className="lang">
                            <button>EN /</button>
                            <button>USD</button>
                        </div>
                    </div>

                    <ul className="nH_right">
                        <li className="iconPerson" onClick={profileFunc}><span><BsPerson /></span><p>My profile</p></li>
                        <li><NavLink to={'/basket'} className="basketNavIcon"><span><SlBasket /></span><span>{info[0].basket.length}</span></NavLink></li>
                        <li className="items"><NavLink to={'/favorite'} className="favoriteLink"><span>Favorite</span><span>{info[0].favorite.length}</span></NavLink></li>
                        <li className="search">
                            <input type="text" name="search" id="search" placeholder="$0.00" />
                            <button><AiOutlineSearch /></button>
                        </li>
                    </ul>
                </div>

                {/* Navbar 'ning pastki qismi */}
                <div className="n_footer">
                    <div className="logo">
                        <NavLink to={'/'}>
                            <figure><img src="./img/Icon.png" alt="Icon.png" /></figure>
                            <h3>E-Comm</h3>
                        </NavLink>
                    </div>
                    <ul className="pages">
                        <li>
                            <NavLink to={'/'}>HOME <span><AiFillCaretDown /></span></NavLink>
                            {/* DropDown */}
                            <div className="dropDown">
                                <div className="d_wrapper">
                                    {/* Card 1 */}
                                    <div className="dW_card">
                                        <h1>Category</h1>
                                        <div className="dWC_main">
                                            <ul>
                                                <li><NavLink>Coporate Shoes</NavLink></li>
                                                <li><NavLink>Sneakers</NavLink></li>
                                                <li><NavLink>Sandals</NavLink></li>
                                                <li><NavLink>Sport Shoe</NavLink></li>
                                                <li><NavLink>Trainers</NavLink></li>
                                            </ul>
                                            <ul>
                                                <li><NavLink>Coporate Shoes</NavLink></li>
                                                <li><NavLink>Sneakers</NavLink></li>
                                                <li><NavLink>Sandals</NavLink></li>
                                                <li><NavLink>Sport Shoe</NavLink></li>
                                                <li><NavLink>Trainers</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="dW_card">
                                        <h1>Category</h1>
                                        <div className="dWC_main">
                                            <ul>
                                                <li><NavLink to={'/hotdeal'}>HOT DEAL</NavLink></li>
                                                <li><NavLink>Sunglasses</NavLink></li>
                                                <li><NavLink>Belts</NavLink></li>
                                                <li><NavLink>Belts</NavLink></li>
                                                <li><NavLink>Sneakers</NavLink></li>
                                            </ul>
                                            <ul>
                                                <li><NavLink to={'/hotdeal'}>HOT DEAL</NavLink></li>
                                                <li><NavLink>Sunglasses</NavLink></li>
                                                <li><NavLink>Belts</NavLink></li>
                                                <li><NavLink>Belts</NavLink></li>
                                                <li><NavLink>Sneakers</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="dW_card">
                                        <h1>Category</h1>
                                        <div className="dWC_main">
                                            <ul>
                                                <li><NavLink>Coporate Shoes</NavLink></li>
                                                <li><NavLink>Sneakers</NavLink></li>
                                                <li><NavLink>Sandals</NavLink></li>
                                                <li><NavLink>Sport Shoe</NavLink></li>
                                                <li><NavLink>Trainers</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink to={'/bags'}>BAGS</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/sneakers'}>SNEAKERS</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/belt'}>BELT</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};