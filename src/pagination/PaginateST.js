import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import { ContextData } from '../context/ContextData';
import BasicRating from '../layouts/StarRating';
import { Skeleton } from '../skeleton/SkeletonST';

export function PaginateST() {

    const { allInfo, likeFunc, basketFunc, aboutPFunc, search, caty, show, value } = useContext(ContextData);

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
    let itemsPerPage = 9;

    if (show !== '') {
        itemsPerPage = show;
    }
    else {
        itemsPerPage = 9
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
            <div className="paginateWrapper1 s_cardWrapper">
                {
                    loading ?
                        <Skeleton type='skeleton' />
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
                                <div className="bS_card sCW_card" key={item.id}>
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