import mongoose from "mongoose";

const { Schema } = mongoose;

const foodItemsSchema = new Schema({
  outletName: String,
  name: String,
  ingredients: [String],
  waiting_time: Number,
  price: Number,
  veg: Boolean,
  image: String,
});

const foodItems = mongoose.model("foodItem", foodItemsSchema);

export default foodItems;
