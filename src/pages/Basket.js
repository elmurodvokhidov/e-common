import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { ContextData } from "../context/ContextData";
import { FiArrowLeft } from "react-icons/fi";
import { PaymentModal1 } from "../layouts/PaymentModal1";
import { PaymentModal2 } from "../layouts/PaymentModal2";
import { PaymentModal3 } from "../layouts/PaymentModal3";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export function Basket() {

    const {
        info,
        checkFunc,
        payModal,
        pMCHExitFunc,
        goToFunc,
        goToState,
        pMCHBackFunc,
        delBasketInfo,
        incFunc,
        decFunc
    } = useContext(ContextData);

    return (
        <>
            <Navbar text={'Basket'} invisibleInp={'invisibleInp'} modal={'modalInv'} />
            <div className="basket">
                {
                    payModal ?
                        <div className="payModal" onClick={pMCHExitFunc}>
                            <div className="pM_content" onClick={(e) => e.stopPropagation()}>
                                <div className="pMC_header">
                                    <div className="pMCH_exit"><button onClick={pMCHExitFunc}><IoIosClose /></button></div>
                                    <div className="pMCH_exit"><button onClick={pMCHBackFunc}><FiArrowLeft /></button></div>
                                </div>

                                <div className="pMC_extra">
                                    <div className="pMC_top">
                                        <h1>Make Payment</h1>
                                        <div className="pMCE_bottom">
                                            <div className="pMCT_num">
                                                <span className="pMCTN_n1">1</span>
                                                <span className="pMCTN_n1 pMCTN_n2" id={goToState.goToFirst ? '' : 'pMCTN_n2'}>2</span>
                                                <span className="pMCTN_n1 pMCTN_n3" id={goToState.goToThird ? 'pMCTN_n3' : ''}>3</span>
                                            </div>
                                            <div className="pMCT_line"></div></div>
                                    </div>

                                    {
                                        goToState.goToFirst ?
                                            <PaymentModal1 /> : ''
                                    }

                                    {
                                        goToState.goToSecond ?
                                            <PaymentModal2 /> : ''
                                    }

                                    {
                                        goToState.goToThird ?
                                            <PaymentModal3 /> : ''
                                    }

                                    <div className="pMC_bottom">
                                        <button onClick={goToFunc}>{goToState.goToFirst ? 'Go to Payment' : ''} {goToState.goToSecond ? 'Confirm' : ''} {goToState.goToThird ? 'Complete' : ''}</button>
                                    </div>
                                </div>
                            </div>
                        </div> : ''
                }
                <div className="basketInfo">
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>UNIT PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                info[0].basket.length > 0 ?
                                    info[0].basket.map((val, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="productCart">
                                                    <button onClick={() => delBasketInfo(val)}><IoIosClose /></button>
                                                    <figure><img src={val.img} alt={val.img} /></figure>
                                                    <p>{val.title}</p>
                                                </div>
                                            </td>
                                            <td>${val.count > 1 ? val.price * val.count : val.price}</td>
                                            <td>
                                                <div className="count">
                                                    <button onClick={() => decFunc(val)}>-</button>
                                                    <span>{val.count}</span>
                                                    <button onClick={() => incFunc(val)}>+</button>
                                                </div>
                                            </td>
                                            <td>${val.prev}</td>
                                        </tr>
                                    )) : <tr className="basketNF"><td colSpan={10}>Information not found!</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

                <div className="basketFooter">
                    <div className="bF_left">
                        <div className="redeem">
                            <input type="text" name="redeem" id="redeem" placeholder="Voucher code" />
                            <label htmlFor="redeem">Redeem</label>
                        </div>
                    </div>
                    <div className="bF_right">
                        <div className="checkOut">
                            <div className="chTop">
                                <div className="chT_left">
                                    <p>Subtotal</p>
                                    <p>Shipping fee</p>
                                    <p>Coupon</p>
                                </div>
                                <div className="chT_left chT_right">
                                    <p>$998</p>
                                    <p>$20</p>
                                    <p>No</p>
                                </div>
                            </div>
                            <div className="chO_footer">
                                <div className="total">
                                    <h1>TOTAL</h1>
                                    <h1>${info[0].basket.reduce((a, b) => a + b.count * b.price, 0)}</h1>
                                </div>
                                <button onClick={checkFunc}>Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};