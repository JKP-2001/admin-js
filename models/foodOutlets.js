import mongoose from "mongoose";
import foodItems from "../models/foodItems.js";

const foodItem = foodItems.schema;

const { Schema } = mongoose;

const foodOutletsSchema = new Schema({
  name: String,
  caption: String,
  closing_time: String,
  waiting_time: String, 
  phone_number: Number,
  latitude: Number,
  longitude: Number,
  address: String,
  tags: [{ type: String }],
  menu: [foodItem],
  imageURL: String
  // last_update: Date,
});

const foodOutlets = mongoose.model("foodOutlet", foodOutletsSchema);

export default foodOutlets;
