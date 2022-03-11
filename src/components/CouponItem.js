import React from 'react'

export default function CouponItem({ coupon, index }) {

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{coupon.couponName}</td>
      <td>{coupon.minAmt}</td>
      <td>{coupon.couponType}</td>
      <td>{(coupon.couponType === 'flat') ? coupon.discount : (coupon.discount + "%")}</td>
      <td>{(coupon.couponType === 'flat' ? "NA" : coupon.maxDiscount)}</td>
      <td>{coupon.startDate}</td>
      <td>{coupon.endDate}</td>
    </tr>

  )
}
