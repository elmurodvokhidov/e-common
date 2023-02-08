import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { RxExit } from 'react-icons/rx';
import { ContextData } from '../context/ContextData';
import BasicRating from '../layouts/StarRating';
import { Skeleton } from '../skeleton/SkeletonST';

function NewPro() {

    const { info, refresh, allInfo, setAllInfo } = useContext(ContextData);

    // Loader State
    const [loading, setLoading] = useState(false);

    // Loader Timer
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    // Exit Added Product Function
    function exitOwnPro() {
        localStorage.setItem('ownProSee', 'false');
        refresh();
    }


    return (
        <div className='newPro'>
            <div className="bags h_section3">
                <button className="profBtn" onClick={exitOwnPro}> <span><RxExit /></span> </button>
                <h1><button className="proBackBtn" onClick={exitOwnPro}><span><AiOutlineLeft /></span></button>Your added Products</h1>
                <div className="bS_wrapper">
                    {
                        loading ?
                            <div className="skeleton3">
                                <Skeleton type='skeleton4' />
                            </div> :
                            info[0].userProduct.length > 0 ?
                                info[0].userProduct.map(item => (
                                    <div className="bS_card bags_card" key={item.id}>
                                        <div className="bSC_img">
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
                                )) : <h1>No products have been added to this account yet!</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default NewPro;