import React, { useState } from 'react'
import { applyCoupon } from '../functions/couponFunctions';

export default function Checkout() {
    const [cartAmount, setCartAmount] = useState();
    const [couponCode, setCouponCode] = useState("");
    const [msg, setMsg] = useState("");

    const handleAmountChange = (e) => {
        setCartAmount(e.target.value);
    }

    const handleCouponCodeChange = (e) => {
        setCouponCode(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await applyCoupon(cartAmount, couponCode);
        console.log(res);
        if (res.msg) {
            setMsg(res.msg);
        }
        else {
            setMsg("Your final amount after applying coupon " + res.discountedPrice);
        }

    }

    return (
        <div className='mx-2 container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Cart Amount</label>
                    <input
                        type="number"
                        min = "0"
                        className="form-control"
                        id="minAmt"
                        placeholder="Enter Cart Amount"
                        onChange={handleAmountChange}
                        value={cartAmount}
                        name="cartAmount"
                    />
                </div>

                <div className="form-group">
                    <label>Coupon Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="minAmt"
                        placeholder="Enter coupon code"
                        onChange={handleCouponCodeChange}
                        value={couponCode}
                        name="couponCode"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Apply Coupon</button>
                <p>{msg}</p>
            </form>



        </div>
    )
}
