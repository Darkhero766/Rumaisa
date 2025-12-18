import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/orders", orderRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.listen(5000, () =>
  console.log("Server running on port 5000")
);
