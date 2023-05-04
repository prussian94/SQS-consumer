import mongoose from "mongoose";
import config from "./config.js";

connectDB().catch((err) => console.log(err));

export async function connectDB() {
  mongoose.connect(config.MONGO_CONN_STRING).then(() => {
    console.log("Connected to MongoDB");
  });
}
