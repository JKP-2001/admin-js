const mongoose = require("mongoose")

const { Schema } = mongoose;


const UploadedFile = new mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String
})

const foodItemsSchema = new Schema({
  outletName: String,
  name: String,
  ingredients: [String],
  waiting_time: Number,
  price: Number,
  veg: Boolean,
  image: UploadedFile,
});

const foodItems = mongoose.model("foodItem", foodItemsSchema);

module.exports =  foodItems;
