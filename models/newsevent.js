const mongoose = require('mongoose');
const validator = require('validator')

// Single file upload, event title, description, date object, club name

const eventSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
  },
  author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
  },
  content: {
      type: String,
      required: true,
  },
  creationDate: {
      type: Date,
      required: true
  },
  updationDate: {
      type: Date,
  },
  imgURL: {
      type: String,
  },
  clubName: {
      type: String,
      required: true
  },
  clubType:{
      type: String,
      required: true
  }

});

const newsSchema = new mongoose.model("News", eventSchema);
module.exports = newsSchema
// export default newsSchema
