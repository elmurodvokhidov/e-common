import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import { ContextData } from '../context/ContextData';
import BasicRating from '../layouts/StarRating';
import { SkeletonND } from '../skeleton/SkeletonND';

export function PaginateND() {

    const { allInfo, likeFunc, basketFunc, aboutPFunc, caty, show, search, value } = useContext(ContextData);

    // Loader State
    const [loading, setLoading] = useState(false);

    // Loader Timer
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 4;

    if (show !== '') {
        itemsPerPage = show;
    }
    else {
        itemsPerPage = 4
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(allInfo.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allInfo.length / itemsPerPage));
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [itemOffset, itemsPerPage, allInfo]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allInfo.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="paginateWrapper2 fully_wrapper">
                {
                    loading ?
                        <SkeletonND type='feed' />
                        :
                        currentItems
                            .filter((item) => {
                                if (
                                    item.caty.toLowerCase().includes(caty.toLowerCase()) &&
                                    item.color.toLowerCase().includes(search.toLowerCase()) &&
                                    item.price > value[0] && item.price < value[1]
                                ) {
                                    return item;
                                }
                            })
                            .map(item => (
                                <div className="fW_card" key={item.id}>
                                    <div className="fWC_left">
                                        <figure><img src={item.img} alt={item.img} /></figure>
                                    </div>
                                    <div className="fWC_right">
                                        <div className="fWCR_header">
                                            <h1>{item.title}</h1>
                                            <div className="fWCRH_bottom">
                                                <div className="starRating">
                                                    <BasicRating />
                                                </div>
                                                <p>0 reviews</p>
                                                <div className="pTCTF_link"><button>Submit a review</button></div>
                                            </div>
                                        </div>
                                        <div className="fWCR_footer">
                                            <div className="bSC_footer">
                                                <h4><span>${item.price}</span><del>${item.prev}</del><span>{item.per}% Off</span></h4>
                                            </div>
                                            <p className="fWCRF_about">{item.about.length > 180 ? item.about.slice(0, 180) + '...' : item.about}</p>
                                            <div className="PTCF_right">
                                                <button onClick={() => basketFunc(item)}><span><SlBasket /></span> <span>Add To Cart</span></button>
                                                <button onClick={() => likeFunc(item)}><span><FaRegHeart /></span></button>
                                                <button onClick={() => aboutPFunc(item)}><span><AiOutlineEye /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                }
            </div>

            <ReactPaginate
                breakLabel="..."
                // nextLabel={<GrFormNext />}
                nextLabel=''
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                // previousLabel={<GrFormPrevious />}
                previousLabel=''
                renderOnZeroPageCount={null}
                containerClassName="pagination1"
                pageLinkClassName='pageNum'
                activeLinkClassName='active'
            />
        </>
    );
}