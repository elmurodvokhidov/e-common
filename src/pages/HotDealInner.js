import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Radio, Select } from "@mui/material";
import { pink } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { Carusel } from "../layouts/Carusel";
import BasicRating from "../layouts/StarRating";
import { ImFacebook } from "react-icons/im";
import { BsHeart, BsTwitter } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { AutoPlay } from '../layouts/AutoPlay';
import { AiOutlineEye } from 'react-icons/ai';
import { useContext } from 'react';
import { ContextData } from '../context/ContextData';
import { useState } from 'react';
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { PhoneCarousel } from '../layouts/PhoneCarousel';
import Swal from 'sweetalert2';

export function HotDealInner() {

    const { likeFunc, basketFunc, aboutPFunc, info, refresh } = useContext(ContextData);

    const [commentInp, setCommentInp] = useState({
        user: '',
        text: '',
        month: '',
        day: '',
        year: ''
    });

    // Month name
    const monthName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    // Collect Informations
    function commentCollect(e) {
        setCommentInp({
            ...commentInp,
            [e.target.name]: e.target.value
        })
    };

    // Send Function
    function commentSend(e) {
        e.preventDefault();
        if (commentInp.user !== '' && commentInp.text !== '') {
            if (localStorage.getItem('comment')) {
                // Ma'lumot bo'lsa
                localStorage.setItem(
                    'comment',
                    JSON.stringify([
                        ...JSON.parse(localStorage.getItem('comment')),
                        { ...commentInp, month: monthName[new Date().getMonth()], day: new Date().getDate(), year: new Date().getFullYear() }
                    ])
                )
            }
            else {
                // Ma'lumot yo'q bo'lsa
                localStorage.setItem(
                    'comment',
                    JSON.stringify([{ ...commentInp, month: monthName[new Date().getMonth()], day: new Date().getDate(), year: new Date().getFullYear() }])
                )
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            refresh();
        }
        else {
            Swal.fire(
                'Warning!',
                'Please fill in all the blanks!',
                'warning'
            )
        }
        setCommentInp({
            user: '',
            text: '',
            month: '',
            day: '',
            year: ''
        })
    }

    // Related Product Informations
    const [relatedPro, setRelatedPro] = useState([
        {
            id: 'bestSellerId1', caty: 'nike2', count: '0', img: './img/imageProduct3.png', title: 'Nike Air Max 270 React', price: '19', prev: '534.33', per: '24', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId2', caty: 'airmax48', count: '0', img: './img/imageProduct4.png', title: 'Nike Air Max 270 React', price: '22', prev: '534.33', per: '24', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId3', caty: 'nike14', count: '0', img: './img/imageProduct5.png', title: 'Nike Air Max 270 React', price: '30', prev: '534.33', per: '24', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId4', caty: 'adidas15', count: '0', img: './img/imageProduct6.png', title: 'Nike Air Max 270 React', price: '94', prev: '534.33', per: '24', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
    ]);

    // Color Radio Button
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange1 = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange1,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    // Select Window 1
    const [age, setAge] = React.useState('');

    const handleChange2 = (event) => {
        setAge(event.target.value);
    };

    // Increment Function
    function incFuncHI(item) {
        localStorage.setItem(
            'aboutProduct',
            JSON.stringify(
                JSON.parse(localStorage.getItem('aboutProduct')).map(
                    foo => foo.id === item.id ?
                        { ...foo, count: +foo.count + 1 } : foo
                )
            )
        )
        refresh();
    }

    // Decrement Function
    function decFuncHI(item) {
        if (item.count > 0) {
            localStorage.setItem(
                'aboutProduct',
                JSON.stringify(
                    JSON.parse(localStorage.getItem('aboutProduct')).map(
                        foo => foo.id === item.id ?
                            { ...foo, count: +foo.count - 1 } : foo
                    )
                )
            )
        }
        refresh();
    }

    return (
        <>
            <Navbar invisibleInp={'invisibleInp'} modal={'modalInv'} text={info[0].aboutProduct[0].title.length > 12 ? info[0].aboutProduct[0].title.slice(0, 12) + '...' : info[0].aboutProduct[0].title} />
            {/* Product Style For Phone Screen */}
            <div className="phoneProduct">
                {
                    info[0].aboutProduct.map(foo => (
                        <div className="pP_card" key={foo.id}>
                            {/* Carousel */}
                            <div className="phoneCarousel">
                                <PhoneCarousel img={foo.img} />
                            </div>

                            {/* About Product */}
                            <div className="aboutPforP">
                                <div className="aPFP_left">
                                    <div className="aPFPL_top">
                                        <h1>{foo.title}</h1>
                                        <button className='aPFPBtn' onClick={() => likeFunc(foo)}><span><BsHeart /></span></button>
                                    </div>
                                    <div className="starRating">
                                        <BasicRating />
                                    </div>
                                    <h4>${foo.price}</h4>
                                </div>
                            </div>

                            <div className="selectPforP">
                                <div className="sPFP_size">
                                    <h2 className="forTitleD">Select Size</h2>
                                    <div className="sPFPS_value">
                                        <button>5</button>
                                        <button>5.5</button>
                                        <button>6</button>
                                        <button>6.5</button>
                                        <button>7</button>
                                        <button>7.5</button>
                                        <button>8</button>
                                        <button>8.5</button>
                                    </div>
                                </div>
                                <div className="sPFP_color">
                                    <h2 className="forTitleD">Select Color</h2>
                                    <div className="sPFPC_value">
                                        <input type="radio" name="#" id="#" />
                                        <input type="radio" name="#" id="#" />
                                        <input type="radio" name="#" id="#" />
                                        <input type="radio" name="#" id="#" />
                                        <input type="radio" name="#" id="#" />
                                        <input type="radio" name="#" id="#" />
                                        <input type="radio" name="#" id="#" />
                                        <input type="radio" name="#" id="#" />
                                    </div>
                                </div>
                            </div>

                            {/* Extra Info Product */}
                            <div className="extraIforP">
                                <h2 className="forTitleD">About</h2>
                                {/* <div className="eIFP_main"></div> */}
                                <p>{foo.about}</p>
                            </div>
                        </div>
                    ))
                }

                {/* Leave comment */}
                <div className="leaveComment">
                    <h3 className="forTitleD">Latest comments</h3>
                    <div className="writtenComment">
                        <div className="wC_scroll">
                            {
                                info[0].comment.length > 0 ?
                                    info[0].comment.map(baz => (
                                        <div className="wC_card" key={baz.user}>
                                            <div className="wCC_username">
                                                <h1>{baz.user}</h1>
                                            </div>
                                            <div className="wCC_text">
                                                <p>{baz.text}</p>
                                            </div>
                                            <h2>{baz.month} {baz.day}, {baz.year}</h2>
                                        </div>
                                    )) : <h4>Information not found!</h4>
                            }
                        </div>
                    </div>

                    <div className="writeComment">
                        {/* <h1>Write Your Review</h1> */}
                        <input onChange={(e) => commentCollect(e)} value={commentInp.user} type="email" name="user" id="user" placeholder='example@gmail.com' />
                        <textarea onChange={(e) => commentCollect(e)} value={commentInp.text} name="text" id="comment" cols="30" rows="5" placeholder='Please write your opinion about the product here...'></textarea>
                        <button onClick={(e) => commentSend(e)}>Send</button>
                    </div>
                </div>

                {/* Footer */}
                <div className="pP_footer">
                    <h1 className="forTitleD">You Might Also Like</h1>
                    <div className="bS_wrapper">
                        {
                            relatedPro.map(item => (
                                <div className="bS_card" key={item.id}>
                                    <div className="bSC_img">
                                        <div className="bSCI_modal">
                                            <div className="bSCIM_icons">
                                                <button className="likeIcon" onClick={() => likeFunc(item)}><span><FaRegHeart /></span></button>
                                                <button className="likeIcon basketIcon" onClick={() => basketFunc(item)}><span><SlBasket /></span></button>
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
                    {/* <button>Add To Cart</button> */}
                </div>
            </div>
            <div className="product">
                <div className="p_top">
                    {
                        info[0]?.aboutProduct.map((item, index) => (
                            <div className="pT_content" key={index}>
                                <div className="pT_left">
                                    <div className="sliderOwn">
                                        <div className="sO_top">
                                            <img src={item.img} alt={item.img} />
                                        </div>
                                        <div className="sO_bottom">
                                            <button><img src="./img/Product Picture02.png" alt="Product Picture02.png" /></button>
                                            <button><img src="./img/Product Picture03.png" alt="Product Picture03.png" /></button>
                                            <button><img src="./img/Product Picture02.png" alt="Product Picture02.png" /></button>
                                            <button><img src="./img/Product Picture01.png" alt="Product Picture01.png" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pT_center">
                                    <div className="pTC_top">
                                        <h1>{item.title}</h1>
                                        <div className="pTCT_footer">
                                            <div className="pTCTF_star"><BasicRating /></div>
                                            <div className="pTCTF_num"><p>0 reviews</p></div>
                                            <div className="pTCTF_link"><NavLink>Submit a review</NavLink></div>
                                        </div>
                                    </div>
                                    <div className="pTC_center">
                                        <div className="pTCC_footer">
                                            <div className="bSC_footer">
                                                <h4><span>${item.price}</span><del>$534,33</del><span>24% Off</span></h4>
                                            </div>
                                            <div className="pTCCF_footer">
                                                <div className="pTCCF_left">
                                                    <p>Availability:</p>
                                                    <p>Category:</p>
                                                    <p>Free shipping</p>
                                                </div>
                                                <div className="pTCCF_left pTCCF_right">
                                                    <p>In stock</p>
                                                    <p>Accessories</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pTC_bottom">
                                        <div className="pTCB_header">
                                            <h1>Product Color:</h1>
                                            <h1>{item.color === 'a' ? 'Blue' : '' || item.color === 'b' ? 'Purple' : '' ||
                                                item.color === 'c' ? 'Green' : '' || item.color === 'd' ? 'Black' : '' ||
                                                    item.color === 'e' ? 'Red' : ''}</h1>
                                            {/* <div className="colorSelect">
                                                <Radio {...controlProps('a')} />
                                                <Radio {...controlProps('b')} color="secondary" />
                                                <Radio {...controlProps('c')} color="success" />
                                                <Radio
                                                    {...controlProps('e')}
                                                    sx={{
                                                        '&.Mui-checked': {
                                                            color: pink[600],
                                                        },
                                                    }}
                                                />
                                            </div> */}
                                        </div>
                                        {/* <div className="pTCB_footer">
                                            <h1>Size</h1>
                                            <div className="sortBy">
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={age}
                                                            label="Age"
                                                            onChange={handleChange2}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={'XS'}>XS</MenuItem>
                                                            <MenuItem value={'XL'}>XL</MenuItem>
                                                            <MenuItem value={'MS'}>MS</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="pTC_footer">
                                        <div className="count">
                                            <button onClick={() => decFuncHI(item)}>-</button>
                                            <span>{item.count}</span>
                                            <button onClick={() => incFuncHI(item)}>+</button>
                                        </div>
                                        <div className="PTCF_right">
                                            <button onClick={() => basketFunc(item)}><span><SlBasket /></span> Add To Cart</button>
                                            <button onClick={() => likeFunc(item)}><span><FaRegHeart /></span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pT_right">
                                    <h1>BEST SELLER</h1>
                                    <AutoPlay />
                                </div>
                            </div>
                        ))
                    }
                    <div className="pT_footer">
                        <button><span><ImFacebook /></span> <p>Share on Facebook</p></button>
                        <button><span><BsTwitter /></span> <p>Share on Twitter</p></button>
                    </div>
                </div>


                {/* Leave comment */}
                <div className="leaveComment">
                    <h3 className="forTitleD">Latest comments</h3>
                    <div className="writtenComment">
                        <div className="wC_scroll">
                            {
                                info[0].comment.length > 0 ?
                                    info[0].comment.map(baz => (
                                        <div className="wC_card" key={baz.user}>
                                            <div className="wCC_username">
                                                <h1>{baz.user}</h1>
                                            </div>
                                            <div className="wCC_text">
                                                <p>{baz.text}</p>
                                            </div>
                                            <h2>{baz.month} {baz.day}, {baz.year}</h2>
                                        </div>
                                    )) : <h4>Information not found!</h4>
                            }
                        </div>
                    </div>

                    <div className="writeComment">
                        {/* <h1>Write Your Review</h1> */}
                        <input onChange={(e) => commentCollect(e)} value={commentInp.user} type="email" name="user" id="user" placeholder='example@gmail.com' />
                        <textarea onChange={(e) => commentCollect(e)} value={commentInp.text} name="text" id="comment" cols="30" rows="5" placeholder='Please write your opinion about the product here...'></textarea>
                        <button onClick={(e) => commentSend(e)}>Send</button>
                    </div>
                </div>

                {/* <div className="p_main">
                    <div className="pM_top">
                        <button className="pMT_tab">Product Infomation</button>
                        <button className="pMT_tab">Reviews <span>0</span></button>
                        <button className="pMT_tab">Another tab</button>
                    </div>
                    <div className="pM_bottom">
                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                    </div>
                </div> */}

                <div className="p_bottom">
                    <h1>RELATED PRODUCTS</h1>
                    <div className="bS_wrapper">
                        {
                            relatedPro.map(item => (
                                <div className="bS_card" key={item.id}>
                                    <div className="bSC_img">
                                        <div className="bSCI_modal">
                                            <div className="bSCIM_icons">
                                                <button className="likeIcon" onClick={() => likeFunc(item)}><span><FaRegHeart /></span></button>
                                                <button className="likeIcon basketIcon" onClick={() => basketFunc(item)}><span><SlBasket /></span></button>
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
            </div>
            <Footer />
        </>
    )
};