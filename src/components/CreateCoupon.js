import React from "react";
import { useState } from "react";
import { createCouponFunc } from '../functions/couponFunctions'

function CreateCoupon() {
  const [couponDetails, setCouponDetails] = useState({
    couponName: "",
    minAmt: "",
    couponType: "",
    discount: "",
    maxDiscount: "",
    startDate: "",
    endDate: "",
  });

  const [alertMsg, setAlertMsg] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCouponDetails({ ...couponDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createCouponFunc(couponDetails);
    if (res.msg) {  
      setAlertMsg(res.msg);
      setAlertColor("danger");
    }
    else {
      setAlertMsg(res);
      setAlertColor("success");
    }

    setTimeout(() => {
      setAlertMsg("");
    }, 5000);
  };
  return (
    <>{alertMsg !== "" &&
      <div className={`alert alert-${alertColor}`} role="alert">
        {alertMsg}
      </div>}
      <form onSubmit={handleSubmit} className="container my-2">
        <div className="form-group">
          <label>Coupon Name</label>
          <input
            type="text"
            className="form-control"
            id="couponName"
            aria-describedby="emailHelp"
            placeholder="Enter coupon name"
            onChange={handleChange}
            value={couponDetails.couponName}
            name="couponName"
          />
        </div>
        <div className="form-group">
          <label>Minimum Amount</label>
          <input
            type="Number"
            className="form-control"
            id="minAmt"
            placeholder="Enter Minimum Cart Amount to apply the coupon"
            onChange={handleChange}
            value={couponDetails.minAmt}
            name="minAmt"
          />
        </div>
        <label className="mr-4">Type of Discount :</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="inlineRadio1"
            onChange={handleChange}
            value="flat"
            name="couponType"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Flat
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="inlineRadio2"
            onChange={handleChange}
            value="percentage"
            name="couponType"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Percentage
          </label>
        </div>

        {couponDetails.couponType !== "" && (
          <>
            <div className="form-group">
              <label>Discount You want to give</label>
              <input
                type="Number"
                className="form-control"
                id="Discount"
                placeholder="Enter Flat Discount"
                onChange={handleChange}
                value={couponDetails.discount}
                name="discount"
              />
            </div>

            {couponDetails.couponType === "percentage" && (
              <div className="form-group">
                <label>Max discount you want to give</label>
                <input
                  type="Number"
                  className="form-control"
                  id="maxDiscount"
                  placeholder="Enter max discount"
                  onChange={handleChange}
                  value={couponDetails.maxDiscount}
                  name="maxDiscount"
                />
              </div>
            )}
          </>
        )}

        <div className="form-group">
          <label>Start Date</label>
          <input
            type="Date"
            className="form-control"
            id="startDate"
            placeholder="Enter coupon start date"
            onChange={handleChange}
            value={couponDetails.startDate}
            name="startDate"
          />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input
            type="Date"
            className="form-control"
            id="startDate"
            placeholder="Enter coupon start date"
            onChange={handleChange}
            value={couponDetails.endDate}
            name="endDate"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form></>
  );
}

export default CreateCoupon;
