export function PaymentModal1() {
    return (
        <>
            <div className="pMC_box">
                <div className="pMCB_left">
                    <input type="text" name="pMCBL_fname" id="pMCBL_fname" placeholder="First Name" />
                    <input className="pSO_inp" type="text" name="pMCBL_lname" id="pMCBL_lname" placeholder="Last Name" />
                    <input type="email" name="pMCBL_email" id="pMCBL_email" placeholder="Email Address" />

                    <form className="pMCB_select">
                        <h2>Select Method of Payment</h2>
                        <div className="pMCBS_s1">
                            <label htmlFor="credit"><img src="./img/Group.png" alt="Group.png" /> Credit Card Or Debit</label>
                            <input type="checkbox" name="pMCB_select" id="credit" />
                        </div>

                        <div className="pMCBS_s1">
                            <label htmlFor="paypal"><img src="./img/Paypal1.png" alt="Paypal1.png" /> Paypal</label>
                            <input type="checkbox" name="pMCB_select" id="paypal" />
                        </div>


                        <div className="pMCBS_s1">
                            <label htmlFor="bank"><img src="./img/Group1.png" alt="Group1.png" /> Bank Transfer</label>
                            <input type="checkbox" name="pMCB_select" id="bank" />
                        </div>

                    </form>
                </div>

                <div className="pMCB_left pMCB_right">
                    <input type="text" name="pMCBL_lname" id="pMCBL_lname" placeholder="Last Name" />
                    <textarea name="pMCBL_address" id="pMCBL_address" cols="60" rows="5" placeholder="Address for Delivery"></textarea>
                    <input type="number" name="pMCBL_mobile" id="pMCBL_mobile" placeholder="Mobile Phone" />
                </div>
            </div>
        </>
    )
}