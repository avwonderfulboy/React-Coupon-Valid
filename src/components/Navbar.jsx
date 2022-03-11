import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Checkout</Link>
        </li>
        <li>
          <Link to="/coupon/create">Create Coupon</Link>
        </li>
        <li>
          <Link to="/coupon/view">View Coupons</Link>
        </li>
      </ul>
    </div>
  );
}
