const mongoose = require("mongoose")
const foodItems = require("../models/foodItems.js")

const { Schema } = mongoose;

const UploadedFile = new mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String
})

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
  menu: [foodItems.schema],
  imageURL: UploadedFile,
  // last_update: Date,
});

const foodOutlets = mongoose.model("foodOutlet", foodOutletsSchema);

module.exports =  foodOutlets;
