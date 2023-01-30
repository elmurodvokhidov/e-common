import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export function PaymentModal2() {
    return (
        <>
            <div className="pMC_box2">
                <div className="pMCB2_left">
                    <figure><img src="./img/CreditCard.png" alt="CreditCard.png" /></figure>
                </div>
                <div className="pMCB2_right">
                    <form action="">
                        <input type="number" name="cardNum" id="cardNum" placeholder="Card Number" />
                        <div className="pMCB2L_inp">
                            <input type="number" name="Expiry" id="Expiry" placeholder="Expiry" />
                            <input type="number" name="CVV" id="CVV" placeholder="CVV" />
                        </div>
                        <input type="number" name="Holder Number" id="Holder Number" placeholder="Holder Number" />
                        <FormGroup className="pMCB2L_check">
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Save this credit card" />
                        </FormGroup>
                    </form>
                </div>
            </div>
        </>
    )
}