import { useEffect } from "react";
import { useContext, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineLeft } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import Swal from "sweetalert2";
import { ContextData } from "../context/ContextData";
import { EditProfile } from "../layouts/EditProfile";
import NewPro from "../myProfile/NewPro";

export function Add() {

    const { profile, profRef, refresh, info, homeLink, editProfile, userProduct } = useContext(ContextData);
    // console.log(btoa(s));
    // Log out Function
    function logOut() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Logged out!',
                    'You have logged out of your account!',
                    'success'
                )
                localStorage.setItem('myProf', 'false');
                homeLink('/');
                refresh();
            }
        })
    }

    const [pANDD, setPANDD] = useState(false);

    // Input Data
    const [input, setInput] = useState({
        title: '',
        about: '',
        price: '',
        photo: '',
        id: '',
        color: '',
        caty: '',
        prev: '534.33',
        count: '0',
        per: '24'
    })

    // Collect Function
    function collect(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    // console.log(input);

    // Add Function
    function addFunc(e) {
        e.preventDefault();
        // console.log(inputData);
        if (input.title !== '' && input.about !== '' && input.price !== '') {
            if (localStorage.getItem(`${userProduct}`)) {
                localStorage.setItem(
                    `${userProduct}`,
                    JSON.stringify([
                        ...JSON.parse(localStorage.getItem(`${userProduct}`)),
                        { ...input, id: new Date().getTime() }
                    ])
                )
            } else {
                localStorage.setItem(
                    `${userProduct}`,
                    JSON.stringify([{ ...input, id: new Date().getTime() }])
                );
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            // else {
            //     localStorage.setItem(
            //         `${userProduct}`,
            //         JSON.stringify(
            //             JSON.parse(localStorage.getItem(`${userProduct}`)).map(baz =>
            //                 baz.id === input.id ? input : baz)
            //         )
            //     )
            //     Swal.fire({
            //         position: 'top-end',
            //         icon: 'success',
            //         title: 'Edited successfully!',
            //         showConfirmButton: false,
            //         timer: 1500
            //     })
            // }
        } else {
            Swal.fire(
                'Warning!',
                'Please fill in all the blanks!',
                'warning'
            )
        }
        setInput({
            title: '',
            about: '',
            price: '',
            photo: '',
            id: '',
            color: '',
            caty: '',
            // prev: '534.33',
            count: '0',
            discount: '',
            like: false
        })
        refresh();
    }

    // Photo Collect
    function photoColl(e) {
        setInput({
            ...input,
            photo: URL.createObjectURL(e.target.files[0]),
        })
    };

    // See Added Product Function
    function ownProFunc() {
        localStorage.setItem('ownProSee', 'true');
        refresh();
    }

    // const [welcome, setWelcome] = useState(info[0].profile[0].about === 'new' ? `You're welcome, ${info[0].profile[0].username}` : `Welcome back, ${info[0].profile[0].username}`)

    // Welcome or Back
    // useEffect(() => {
    //     setTimeout(() => {
    //         setWelcome('')
    //     }, 8000);
    // })

    return (
        <>
            {
                info[0].ownProSee ?
                    <NewPro /> :
                    <div className="addPage">
                        {
                            info[0].editProfModal ?
                                <EditProfile /> :
                                <div className="add">
                                    {/* Phone Add Navbar */}
                                    <div className="phoneAddNavbar">
                                        <div className="pAN_left">
                                            <button onClick={() => homeLink('/')}><span><AiOutlineLeft /></span></button>
                                            <h1 className="forTitleD">Account</h1>
                                        </div>
                                        <ul className="pAN_right">
                                            <li className="iconPerson" onClick={() => setPANDD(!pANDD)}><span><BsPerson /></span><span><AiFillCaretDown /></span></li>
                                            <li className="iconPerson bell" onClick={ownProFunc}><span><BiBell /></span><i></i></li>
                                            {
                                                pANDD ?
                                                    <ul className="pAN_dropDown">
                                                        <span><AiFillCaretUp /></span>
                                                        <li onClick={editProfile}>Edit</li>
                                                        <li onClick={logOut}>Log out</li>
                                                        <div className="pANExit" onClick={() => setPANDD(false)}></div>
                                                    </ul>
                                                    : ''
                                            }
                                        </ul>
                                    </div>

                                    <div className="addNavbar">
                                        <div className="aN_top">
                                            <div className="logo">
                                                <section onClick={() => homeLink('/')}>
                                                    <figure><img src="./img/Icon.png" alt="Icon.png" /></figure>
                                                    <h3>E-Comm</h3>
                                                </section>
                                            </div>
                                            <div className="aNT_right">
                                                <button className="productBtn" onClick={ownProFunc}><p>Product</p><p>{info[0].userProduct.length}</p></button>
                                                <button onClick={editProfile}>Edit Profile</button>
                                                <button onClick={logOut}>Log out</button>
                                            </div>
                                        </div>
                                        {/* <h1>{welcome}</h1> */}
                                    </div>
                                    <form action="#" className="accFF">
                                        <h1>Add new Product</h1>
                                        <div className="input">
                                            <label htmlFor="title">Name</label>
                                            <input onInput={(e) => collect(e)} autoComplete='current-username' value={input.title} type="text" name="title" id="title" placeholder="Name" />
                                        </div>

                                        <div className="input">
                                            <label htmlFor="about">About</label>
                                            <input onInput={(e) => collect(e)} autoComplete='current-password' value={input.about} type="text" name="about" id="about" placeholder="About" />
                                        </div>

                                        <div className="select">
                                            <div className="input">
                                                <label htmlFor="price">Price</label>
                                                <input onInput={(e) => collect(e)} autoComplete='current-password' value={input.price} type="number" name="price" id="price" placeholder="Price" />
                                            </div>

                                            <div className="input">
                                                <label htmlFor="discount">Discount</label>
                                                <input onInput={(e) => collect(e)} autoComplete='current-password' value={input.discount} type="number" name="discount" id="discount" placeholder="Discount" />
                                            </div>
                                        </div>

                                        <div className="select">
                                            {/* Color Select */}
                                            <div className="selectOne">
                                                <label htmlFor="color">Color</label>
                                                <select name="color" id="color" onChange={(e) => collect(e)}>
                                                    <option value="a">Blue</option>
                                                    <option value="b">Purple</option>
                                                    <option value="c">Green</option>
                                                    <option value="d">Black</option>
                                                    <option value="e">Red</option>
                                                </select>
                                            </div>
                                            {/* Color Select */}
                                            <div className="selectOne selectTwo">
                                                <label htmlFor="category">Category</label>
                                                <select name="caty" id="caty" onChange={(e) => collect(e)}>
                                                    <option value="airmax">Airmax</option>
                                                    <option value="nike">Nike</option>
                                                    <option value="vans">Vans</option>
                                                    <option value="adidas">Adidas</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="formFooter">
                                            <label htmlFor="photo" id="labelPhoto">
                                                <p>Image</p>
                                                <img src="./img/Group 177.svg" alt="" />
                                            </label>
                                            <input onInput={(e) => photoColl(e)} type="file" name="photo" id="photo" />
                                        </div>

                                        <div className="formBtn">
                                            <button onClick={(e) => addFunc(e)}>Add</button>
                                        </div>
                                    </form>
                                </div>
                        }
                        {/* <p className="activity">Last login activity: {info[0].profile[0].hour} : {info[0].profile[0].minut}</p> */}
                    </div>
            }
        </>
    )
};