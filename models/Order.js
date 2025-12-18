import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  product: String,
  amount: Number,
  paymentId: String
});

export default mongoose.model("Order", orderSchema);
