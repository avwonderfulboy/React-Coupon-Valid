import axios from 'axios';

export const createCouponFunc = async (couponDetails) => {
    try {
        const res = await axios.post(`https://couponvalidaator.herokuapp.com/api/coupon`, couponDetails);
        return res.data;
    }
    catch (err) {
        return err.response.data;
    }
}


export const getCoupons = async () => {
    try {
        const res = await axios.get(`https://couponvalidaator.herokuapp.com/api/coupon`);
        return res.data;
    }
    catch (err) {
        return err.response.data;
    }
}

export const applyCoupon = async (cartAmount, couponCode) => {
    try {
        const res = await axios.post(`https://couponvalidaator.herokuapp.com/api/applyCoupon`, { cartAmount, couponName: couponCode })
        return res.data;
    } catch (err) {
        return err.response.data;
    }
}