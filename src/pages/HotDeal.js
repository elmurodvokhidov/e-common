import { NavLink } from "react-router-dom";
import { CgMenu, CgMenuGridR } from "react-icons/cg";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ContextData } from "../context/ContextData";
import { PaginateST } from "../pagination/PaginateST";
import { PaginateND } from "../pagination/PaginateND";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { useContext } from "react";

export function HotDeal() {

    const {
        hotDealTF,
        hotDealFT,
        info,
        allInfo,
        search,
        setSearch,
        setCaty,
        show,
        setShow,
        value,
        setValue,
        selectedValue,
        setSelectedValue
    } = useContext(ContextData);

    // Price Range
    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // setSearch(value[0]);
    };

    // console.log(value.slice(1, 2));
    // console.log(value[0].toString());
    // console.log(allInfo.map(val => val.price));
    // console.log(allInfo.filter(val => val.price > value[0] && val.price < value[1]));

    // Color Radio Button
    const handleChange1 = (event) => {
        setSelectedValue(event.target.value);
        setSearch(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange1,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    // console.log(selectedValue);
    // console.log(search);

    // Select Window 1
    const [age, setAge] = React.useState('');

    const handleChange2 = (event) => {
        setAge(event.target.value);
    };

    // console.log(age);

    // Select Window 2
    const handleChange3 = (event) => {
        setShow(event.target.value);
    };

    // console.log(show);

    return (
        <>
            <Navbar text={'Hot Deal'} invisibleInp={'invisibleInp'} modal={'modalInv'} />
            <div className="hotDeal">
                <div className="h_wrapper">
                    {/* Left */}
                    <div className="hW_left">
                        <div className="deal">
                            <h1>Hot Deals</h1>
                            {/* <div className="dealContent">
                                <button value={'nike'} onClick={(e) => setCaty(e.target.value)}>Nike</button>
                                <span>45</span>
                            </div> */}
                            <div className="dealContent">
                                <button value={'airmax'} onClick={(e) => setCaty(e.target.value)}>Airmax</button>
                                <span>45</span>
                            </div>
                            <div className="dealContent">
                                <button value={'nike'} onClick={(e) => setCaty(e.target.value)}>Nike</button>
                                <span>45</span>
                            </div>
                            {/* <div className="dealContent">
                                <button value={'adidas'} onClick={(e) => setCaty(e.target.value)}>Adidas</button>
                                <span>45</span>
                            </div> */}
                            <div className="dealContent">
                                <button value={'vans'} onClick={(e) => setCaty(e.target.value)}>Vans</button>
                                <span>45</span>
                            </div>
                            <div className="dealContent">
                                <button value={'adidas'} onClick={(e) => setCaty(e.target.value)}>Adidas</button>
                                <span>45</span>
                            </div>
                            <div className="dealContent">
                                <button value={''} onClick={(e) => setCaty(e.target.value)}>Clear</button>
                            </div>
                        </div>

                        <div className="price">
                            <h1>PRICES</h1>
                            <div className="priceRange">
                                <h2><span>Ranger: </span> <span>${value[0]} - ${value[1]}</span></h2>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        size="small"
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className="price color">
                            <h1>COLOR</h1>
                            <div className="colorSelect">
                                <Radio {...controlProps('a')} />
                                <Radio {...controlProps('b')} color="secondary" />
                                <Radio {...controlProps('c')} color="success" />
                                <Radio {...controlProps('d')} color="default" />
                                <Radio
                                    {...controlProps('e')}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            </div>
                        </div>

                        <div className="deal brand">
                            <h1>BRAND</h1>
                            <button>Nike <span>99</span></button>
                            <button>Nike <span>99</span></button>
                            <button>Adidas <span>99</span></button>
                            <button>Siemens <span>99</span></button>
                        </div>

                        <button className="moreBtn">MORE</button>
                    </div>

                    {/* Right */}
                    <div className="hW_right">
                        {/* SECTION 4 */}
                        <div className="h_section4">
                            <div className="hS4_left">
                                <h1>Adidas Men Running Sneakers</h1>
                                <div className="hS4L_bottom">
                                    <p>Performance and design. Taken right to the edge.</p>
                                    <span><NavLink to={'/'}>SHOP NOW</NavLink></span>
                                </div>
                            </div>

                            <div className="hS4_right">
                                <figure>
                                    <img src="./img/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" alt="shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" />
                                </figure>
                            </div>
                        </div>

                        {/* Select */}
                        <div className="selectSort">
                            <div className="s_left">
                                <h1 className="sortBy">{allInfo.length} Items</h1>
                                <div className="sortBy sort1">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
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
                                                <MenuItem value={'name'}>Name</MenuItem>
                                                <MenuItem value={'price'}>Price</MenuItem>
                                                <MenuItem value={'rating'}>Rating</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                                <div className="sortBy show">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Show</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={show}
                                                label="Show"
                                                onChange={handleChange3}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={12}>12</MenuItem>
                                                <MenuItem value={15}>15</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>

                            <div className="s_right">
                                <button id={info[0].hotDeal ? 'sR_color' : ''} onClick={hotDealTF}><span><CgMenuGridR /></span></button>
                                <button id={info[0].hotDeal ? '' : 'sR_color'} onClick={hotDealFT}><span><CgMenu /></span></button>
                            </div>
                        </div>

                        {/* Paginations */}
                        {
                            info[0].hotDeal ?
                                <PaginateST />
                                :
                                <PaginateND />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};