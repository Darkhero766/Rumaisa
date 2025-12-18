import Razorpay from "razorpay";

export const razorpay = new Razorpay({
  key_id: process.env.RZP_KEY,
  key_secret: process.env.RZP_SECRET
});
