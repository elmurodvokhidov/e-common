import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BasicRating from "../layouts/StarRating";
import Swal from "sweetalert2";

export const ContextData = React.createContext();

function ContextFunc({ children }) {

    const basketUrl = useNavigate();
    const hotDealInnerLink = useNavigate();
    const favoriteLink = useNavigate();
    const profileLink = useNavigate();
    const homeLink = useNavigate();

    // Promo Code
    const promoCode = 'NewYear';

    // Best Seller Informations
    const [bestSInfo, setBestSInfo] = useState([
        {
            id: 'bestSellerId1', like: false, caty: 'nike', color: 'a', count: '0', img: './img/imageProduct3.png', title: 'Nike Air Max 270 React', price: 19, discount: '20', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId2', like: false, caty: 'airmax', color: 'b', count: '0', img: './img/imageProduct4.png', title: 'Airmax 270 React', price: 22, discount: '12', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId3', like: false, caty: 'nike', color: 'a', count: '0', img: './img/imageProduct5.png', title: 'Nike Air Max 270 React', price: 30, discount: '24', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId4', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/imageProduct6.png', title: 'Adidas 270 React', price: 94, discount: '17', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId5', like: false, caty: 'vans', color: 'd', count: '0', img: './img/Product Picture02.png', title: 'Vans Air Max 270 React', price: 43, discount: '22', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId6', like: false, caty: 'nike', color: 'a', count: '0', img: './img/Product Picture03.png', title: 'Nike Air Max 270 React', price: 23, discount: '20', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId7', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/Product Picture01.png', title: 'Adidas 270 React', price: 14, discount: '13', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bestSellerId8', like: false, caty: 'nike', color: 'a', count: '0', img: './img/imageProduct6.png', title: 'Nike Air Max 270 React', price: 43, discount: '16', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        }
    ]);

    // Informations
    const [HotDealInfo, setHotDealInfo] = React.useState([
        {
            id: 'HotDealInfo1', like: false, caty: 'airmax', color: 'b', count: '0', like: false, img: './img/imageProduct3.png', title: 'Airmax 270 React', price: 54, discount: '18', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo2', like: false, caty: 'nike', color: 'a', count: '0', like: false, img: './img/imageProduct4.png', title: 'Nike Air Max 270 React', price: 63, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo3', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', like: false, img: './img/imageProduct5.png', title: 'Adidas 270 React', price: 72, discount: '19', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo4', like: false, caty: 'vans', color: 'd', count: '0', like: false, img: './img/Product Picture02.png', title: 'Vans Air Max 270 React', price: 55, discount: '25', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo5', like: false, caty: 'nike', color: 'a', count: '0', like: false, img: './img/Product Picture03.png', title: 'Nike Air Max 270 React', price: 18, discount: '12', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo6', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', like: false, img: './img/Product Picture01.png', title: 'Adidas 270 React', price: 10, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo7', like: false, caty: 'nike', color: 'a', count: '0', like: false, img: './img/imageProduct6.png', title: 'Nike Air Max 270 React', price: 25, discount: '13', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo8', like: false, caty: 'airmax', color: 'b', count: '0', like: false, img: './img/imageProduct6.png', title: 'Airmax 270 React', price: 45, discount: '25', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo9', like: false, caty: 'nike', color: 'a', count: '0', like: false, img: './img/imageProduct4.png', title: 'Nike Air Max 270 React', price: 88, discount: '28', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo10', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', like: false, img: './img/imageProduct3.png', title: 'Adidas 270 React', price: 10, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo11', like: false, caty: 'vans', color: 'd', count: '0', like: false, img: './img/Product Picture03.png', title: 'Vans Air Max 270 React', price: 95, discount: '30', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo12', like: false, caty: 'nike', color: 'a', count: '0', like: false, img: './img/Product Picture01.png', title: 'Nike Air Max 270 React', price: 100, discount: '30', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo13', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', like: false, img: './img/Product Picture02.png', title: 'Adidas 270 React', price: 81, discount: '28', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo14', like: false, caty: 'nike', color: 'a', count: '0', like: false, img: './img/imageProduct4.png', title: 'Nike Air Max 270 React', price: 64, discount: '26', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'HotDealInfo15', like: false, caty: 'airmax', color: 'b', count: '0', like: false, img: './img/imageProduct6.png', title: 'Airmax 270 React', price: 33, discount: '15', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
    ]);

    // Bags Informations
    const [bagsInfo, setBagsInfo] = useState([
        {
            id: 'bagsInfoId1', like: false, caty: 'nike', color: 'a', count: '0', img: './img/i.webp', title: 'Bag Max 300 React', price: 5, discount: '15', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId2', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/i (1).webp', title: 'Bag Adidas 300 React', price: 8, discount: '15', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId3', like: false, caty: 'vans', color: 'd', count: '0', img: './img/i (2).webp', title: 'Bag Vans 300 React', price: 25, discount: '20', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId4', like: false, caty: 'nike', color: 'a', count: '0', img: './img/i (3).webp', title: 'Bag Max 300 React', price: 18, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId5', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/i (4).webp', title: 'Bag Adidas 300 React', price: 10, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId6', like: false, caty: 'nike', color: 'a', count: '0', img: './img/i (5).webp', title: 'Bag Max 300 React', price: 44, discount: '24', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId7', like: false, caty: 'airmax', color: 'b', count: '0', img: './img/i (6).webp', title: 'Bag Airmax 300 React', price: 52, discount: '25', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId8', like: false, caty: 'nike', color: 'a', count: '0', img: './img/i (7).webp', title: 'Bag Max 300 React', price: 50, discount: '23', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId9', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/i (8).webp', title: 'Bag Adidas 300 React', price: 28, discount: '20', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId10', like: false, caty: 'vans', color: 'd', count: '0', img: './img/i (9).webp', title: 'Bag Vans 300 React', price: 11, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId11', like: false, caty: 'nike', color: 'a', count: '0', img: './img/i (10).webp', title: 'Bag Max 300 React', price: 21, discount: '15', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'bagsInfoId12', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/i (11).webp', title: 'Bag Adidas 300 React', price: 32, discount: '20', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        }
    ])

    // Sneakers Informations
    const [sneakersInfo, setSneakersInfo] = useState([
        {
            id: 'sneakersInfoId1', like: false, caty: 'nike', color: 'a', count: '0', img: './img/sneakers.webp', title: 'Sneakers Max 250 React', price: 99, discount: '30', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sneakersInfoId2', like: false, caty: 'airmax', color: 'b', count: '0', img: './img/sneakers(1).webp', title: 'Sneakers Airmax 250 React', price: 100, discount: '35', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sneakersInfoId3', like: false, caty: 'nike', color: 'a', count: '0', img: './img/sneakers(2).webp', title: 'Sneakers Max 250 React', price: 55, discount: '20', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sneakersInfoId4', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/sneakers(3).webp', title: 'Sneakers Adidas 250 React', price: 62, discount: '24', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sneakersInfoId5', like: false, caty: 'vans', color: 'd', count: '0', img: './img/sneakers(4).webp', title: 'Sneakers Vans 250 React', price: 48, discount: '22', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sneakersInfoId6', like: false, caty: 'nike', color: 'a', count: '0', img: './img/sneakers(5).webp', title: 'Sneakers Max 250 React', price: 33, discount: '15', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sneakersInfoId7', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/sneakers(6).webp', title: 'Sneakers Adidas 250 React', price: 95, discount: '33', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sneakersInfoId8', like: false, caty: 'nike', color: 'a', count: '0', img: './img/sneakers(7).webp', title: 'Sneakers Max 250 React', price: 90, discount: '35', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        }
    ])

    // Belt Informations
    const [beltInfo, setBeltInfo] = useState([
        {
            id: 'beltInfoId1', like: false, caty: 'airmax', color: 'b', count: '0', img: './img/belt.webp', title: 'Belt Airmax 250 React', price: 1, discount: '0', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'beltInfoId2', like: false, caty: 'nike', color: 'a', count: '0', img: './img/belt(1).webp', title: 'Belt Max 250 React', price: 8, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'beltInfoId3', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/belt(2).webp', title: 'Belt Adidas 250 React', price: 10, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'beltInfoId4', like: false, caty: 'vans', color: 'd', count: '0', img: './img/belt(3).webp', title: 'Belt Vans 250 React', price: 8, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'beltInfoId5', like: false, caty: 'nike', color: 'a', count: '0', img: './img/belt(4).webp', title: 'Belt Max 250 React', price: 13, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'beltInfoId6', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/belt(5).webp', title: 'Belt Adidas 250 React', price: 20, discount: '15', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'beltInfoId7', like: false, caty: 'nike', color: 'a', count: '0', img: './img/belt(6).webp', title: 'Belt Max 250 React', price: 15, discount: '12', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'beltInfoId8', like: false, caty: 'airmax', color: 'b', count: '0', img: './img/belt(7).webp', title: 'Belt Airmax 250 React', price: 3, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
    ])

    // Sunglasses Informations
    const [sunglassesInfo, setSunglassesInfo] = useState([
        {
            id: 'sunglassesInfoId1', like: false, caty: 'nike', color: 'a', count: '0', img: './img/sunglasses.webp', title: 'Sunglasses Max 250 React', price: 2, discount: '0', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sunglassesInfoId2', like: false, caty: 'airmax', color: 'b', count: '0', img: './img/sunglasses(1).webp', title: 'Sunglasses Airmax 250 React', price: 10, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sunglassesInfoId3', like: false, caty: 'nike', color: 'a', count: '0', img: './img/sunglasses(2).webp', title: 'Sunglasses Max 250 React', price: 5, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sunglassesInfoId4', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/sunglasses(3).webp', title: 'Sunglasses Adidas 250 React', price: 6, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sunglassesInfoId5', like: false, caty: 'vans', color: 'd', count: '0', img: './img/sunglasses(4).webp', title: 'Sunglasses Vans 250 React', price: 13, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sunglassesInfoId6', like: false, caty: 'nike', color: 'a', count: '0', img: './img/sunglasses(5).webp', title: 'Sunglasses Max 250 React', price: 12, discount: '11', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
        {
            id: 'sunglassesInfoId7', like: false, caty: 'adidas', promo: `${promoCode}`, color: 'e', count: '0', img: './img/sunglasses(6).webp', title: 'Sunglasses Adidas 250 React', price: 7, discount: '10', about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptate sit voluptas. Id repellat, maiores ea delectus nobis eaque deserunt, non reprehenderit veritatis ratione quidem, ut totam ad sed at. Ratione ipsam quidem sunt minima ex explicabo, rerum ullam."
        },
    ])

    // All Local Informations
    const [info, setInfo] = useState([
        {
            favorite: JSON.parse(localStorage.getItem('favorite')) || [],
            basket: JSON.parse(localStorage.getItem('basket')) || [],
            hotDeal: localStorage.getItem('hotDealState') ? JSON.parse(localStorage.getItem('hotDealState')) : localStorage.setItem('hotDealState', 'true'),
            loadMore: localStorage.getItem('loadMoreState') ? JSON.parse(localStorage.getItem('loadMoreState')) : localStorage.setItem('loadMoreState', 'true'),
            profile: JSON.parse(localStorage.getItem('profile')) || [],
            // footer: JSON.parse(localStorage.getItem('footer')) || localStorage.setItem('footer', 'true'),
            myProf: JSON.parse(localStorage.getItem('myProf')),
            editProfModal: JSON.parse(localStorage.getItem('editProfModal')),
            userProduct: JSON.parse(localStorage.getItem(`${userProduct}`)) || [],
            ownProSee: JSON.parse(localStorage.getItem('ownProSee')),
            aboutProduct: JSON.parse(localStorage.getItem('aboutProduct')) || [],
            comment: JSON.parse(localStorage.getItem('comment')) || []
        }
    ])

    // Refresh Function
    function refresh() {
        setInfo([
            {
                favorite: JSON.parse(localStorage.getItem('favorite')) || [],
                basket: JSON.parse(localStorage.getItem('basket')) || [],
                hotDeal: localStorage.getItem('hotDealState') ? JSON.parse(localStorage.getItem('hotDealState')) : localStorage.setItem('hotDealState', 'true'),
                loadMore: localStorage.getItem('loadMoreState') ? JSON.parse(localStorage.getItem('loadMoreState')) : localStorage.setItem('loadMoreState', 'true'),
                profile: JSON.parse(localStorage.getItem('profile')) || [],
                // footer: JSON.parse(localStorage.getItem('footer')) || localStorage.setItem('footer', 'true'),
                myProf: JSON.parse(localStorage.getItem('myProf')),
                editProfModal: JSON.parse(localStorage.getItem('editProfModal')),
                userProduct: JSON.parse(localStorage.getItem(`${userProduct}`)) || [],
                ownProSee: JSON.parse(localStorage.getItem('ownProSee')),
                aboutProduct: JSON.parse(localStorage.getItem('aboutProduct')) || [],
                comment: JSON.parse(localStorage.getItem('comment')) || []
            }
        ])
    }

    // console.log(allInfo);

    // Username va Password'ni Loacal key sifatida ishlatish
    var userProduct = info[0]?.profile[0]?.username + info[0]?.profile[0]?.password

    const [payModal, setPayModal] = useState(false);
    const [goToState, setGoToState] = useState({
        goToFirst: true,
        goToSecond: false,
        goToThird: false,
    });


    const [value, setValue] = useState([0, 100]);
    const [search, setSearch] = useState('');
    const [caty, setCaty] = useState('');
    // Select Window 2
    const [show, setShow] = useState('');
    // Color Radio Button
    const [selectedValue, setSelectedValue] = useState('a');

    // Exit Profile Function
    function exitProf() {
        // localStorage.setItem('footer', 'true');
        // refresh();
        homeLink('/')
    }

    // Profile Function
    function profileFunc() {
        // if (localStorage.getItem('footer')) {
        //     localStorage.setItem('footer', 'false');
        // }
        // refresh();
        profileLink('/profile');
    }

    // HotDeal True False Function
    function hotDealTF() {
        if (localStorage.getItem('hotDealState') === 'false') {
            localStorage.setItem('hotDealState', 'true')
        }
        refresh();
    }

    // HotDeal False True Function
    function hotDealFT() {
        if (localStorage.getItem('hotDealState') === 'true') {
            localStorage.setItem('hotDealState', 'false')
        }
        refresh();
    }

    // Load More True False Function
    function loadMFunc() {
        if (localStorage.getItem('loadMoreState') === 'false') {
            localStorage.setItem('loadMoreState', 'true')
        } else {
            localStorage.setItem('loadMoreState', 'false')
        }
        refresh();
    }

    // Basket Function
    function basketFunc(item) {
        if (info[0].basket.filter((pro) => pro.id === item.id).length === 0) {
            if (localStorage.getItem('basket')) {
                // Agar Storage'da ma'lumot bo'lsa
                localStorage.setItem(
                    'basket',
                    JSON.stringify([
                        ...JSON.parse(localStorage.getItem('basket')),
                        { ...item, count: +item.count + 1 }
                    ])
                )
            }
            else {
                // Agar Storage'da ma'lumot yo'q bo'lsa
                localStorage.setItem(
                    'basket',
                    JSON.stringify([{ ...item }])
                );
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
                'This product is already in the basket',
                'info'
            )
        }
    }

    // Like Function
    function likeFunc(item) {
        if (info[0].favorite.filter((pro) => pro.id === item.id).length === 0) {
            if (localStorage.getItem('favorite')) {
                // Agar Storage'da ma'lumot bo'lsa
                localStorage.setItem(
                    'favorite',
                    JSON.stringify([
                        ...JSON.parse(localStorage.getItem('favorite')),
                        { ...item, like: true }
                    ])
                )
            }
            else {
                // Agar Storage'da ma'lumot yo'q bo'lsa
                localStorage.setItem(
                    'favorite',
                    JSON.stringify([{ ...item, like: true }])
                );
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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Removed successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            localStorage.setItem(
                'favorite',
                JSON.stringify(
                    JSON.parse(localStorage.getItem('favorite')).filter(
                        (foo) => foo.id !== item.id
                    )
                )
            )
            refresh();
        }
    }

    // Unlike Function
    function unlikeFunc(foo) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Removed successfully!',
            showConfirmButton: false,
            timer: 1500
        })
        localStorage.setItem(
            'favorite',
            JSON.stringify(
                JSON.parse(localStorage.getItem('favorite')).filter(
                    (item) => item.id !== foo.id
                )
            )
        )
        refresh();
    }

    // About Card Function
    function aboutPFunc(item) {
        hotDealInnerLink('/product');
        localStorage.setItem('aboutProduct', JSON.stringify([{ ...item }]));
        refresh();
        // console.log(info[0].aboutProduct);
    }

    // Check Out Function
    function checkFunc() {
        setPayModal(true);
    }

    // Exit Function
    function pMCHExitFunc() {
        setPayModal(false);
    }

    // Go To Function
    function goToFunc() {
        if (goToState.goToFirst === true) {
            setGoToState({ ...goToState, goToFirst: false, goToSecond: true });
        }
        if (goToState.goToSecond === true) {
            setGoToState({ ...goToState, goToSecond: false, goToThird: true });
        }
        if (goToState.goToThird === true) {
            setGoToState({ ...goToState, goToThird: false, goToFirst: true });
            pMCHExitFunc();
        }
    }

    // Back Function
    function pMCHBackFunc() {
        if (goToState.goToFirst === true) {
            pMCHExitFunc();
        }
        if (goToState.goToSecond === true) {
            setGoToState({ ...goToState, goToSecond: false, goToFirst: true });
        }
        if (goToState.goToThird === true) {
            setGoToState({ ...goToState, goToThird: false, goToSecond: true });
        }
    }

    // Delete Basket Information Function
    function delBasketInfo(val) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                localStorage.setItem(
                    'basket',
                    JSON.stringify(
                        JSON.parse(localStorage.getItem('basket')).filter(
                            (item) => item.id !== val.id
                        )
                    )
                )
                refresh();
            }
            else {
                localStorage.setItem(
                    'basket',
                    JSON.stringify(
                        JSON.parse(localStorage.getItem('basket')).map(
                            (foo) => (foo.id === val.id && foo.count === 0) ?
                                { ...foo, count: +foo.count + 1 } : foo
                        )
                    )
                )
                refresh();
            }
        })
    }

    // Increment Function
    function incFunc(item) {
        localStorage.setItem(
            'basket',
            JSON.stringify(
                JSON.parse(localStorage.getItem('basket')).map(
                    foo => foo.id === item.id ?
                        { ...foo, count: +foo.count + 1 } : foo
                )
            )
        )
        refresh();
    }

    // console.log(info[0].basket.reduce((a, b) => a + b.count * b.price, 0));

    // Decrement Function
    function decFunc(item) {
        localStorage.setItem(
            'basket',
            JSON.stringify(
                JSON.parse(localStorage.getItem('basket')).map(
                    foo => foo.id === item.id ?
                        { ...foo, count: +foo.count - 1 } : foo
                )
            )
        )
        JSON.parse(localStorage.getItem('basket')).map(
            foo => (foo.id === item.id && foo.count === 0) ?
                delBasketInfo(item) : foo
        )
        refresh();
    }

    // Data Base Input
    const [dataBaseInput, setDataBaseInput] = useState({
        username: '',
        password: '',
        about: '',
        hour: '',
        minut: '',
    });

    // Collect Profile Informations
    function collectProf(e) {
        setDataBaseInput({
            ...dataBaseInput,
            [e.target.name]: e.target.value
        })
    }

    // Edit Profile Informations
    function editProfile() {
        setDataBaseInput({
            username: info[0].profile[0].username,
            password: info[0].profile[0].password
        })
        localStorage.setItem('editProfModal', 'true');
        refresh();
    }

    // Clear Function
    function clear() {
        setDataBaseInput({
            username: '',
            password: '',
        });
    }

    // All Informations
    const [allInfo, setAllInfo] = useState([
        ...info[0]?.userProduct,
        ...bestSInfo,
        ...HotDealInfo,
        ...bagsInfo,
        ...sneakersInfo,
        ...beltInfo,
        ...sunglassesInfo,
    ]);

    // Best Seller Component
    function BestSeller() {
        return (
            <>
                <div className="bS_wrapper">
                    {
                        bestSInfo.map(item => (
                            <div className="bS_card" key={item.id}>
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
            </>
        )
    };

    return (
        <ContextData.Provider value={{
            BestSeller,
            basketUrl,
            basketFunc,
            likeFunc,
            aboutPFunc,
            HotDealInfo,
            setHotDealInfo,
            hotDealInnerLink,
            checkFunc,
            payModal,
            pMCHExitFunc,
            goToFunc,
            goToState,
            pMCHBackFunc,
            info,
            setInfo,
            delBasketInfo,
            incFunc,
            decFunc,
            unlikeFunc,
            hotDealTF,
            setBestSInfo,
            allInfo,
            bagsInfo,
            sneakersInfo,
            beltInfo,
            sunglassesInfo,
            loadMFunc,
            hotDealFT,
            search,
            setSearch,
            caty,
            setCaty,
            show,
            setShow,
            profileFunc,
            exitProf,
            refresh,
            homeLink,
            editProfile,
            dataBaseInput,
            setDataBaseInput,
            collectProf,
            clear,
            value,
            setValue,
            selectedValue,
            setSelectedValue,
            userProduct,
            allInfo,
            setAllInfo
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunc;