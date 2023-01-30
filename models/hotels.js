const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  password: {
    type: String,
    required: true,
  },
});

const Hotel = new mongoose.model("Event", hotelSchema);

module.exports = Hotel;
