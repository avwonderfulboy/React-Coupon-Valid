import React, { useState, useEffect } from 'react'
import { getCoupons } from '../functions/couponFunctions'
import CouponItem from './CouponItem';


export default function ViewCoupons() {
    const [coupons, setCoupons] = useState("");

    useEffect(() => {
        async function getCouponFunc() {
            const res = await getCoupons();
            setCoupons(res);
        }

        getCouponFunc();

    }, [])


    return (
        <div>
            <table class="table my-3 container ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Coupon Name</th>
                        <th scope="col">Minimum Amount</th>
                        <th scope="col">Coupon Type</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Maximum Discount</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coupons && coupons.map((coupon, index) => {
                            return <CouponItem coupon={coupon} index={index} key={coupon.couponName}/>
                            })}
                </tbody>
            </table>
        </div>
    )
}
