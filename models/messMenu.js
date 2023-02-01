const mongoose = require("mongoose")

const hostel = ["Barak","Brahmaputra","Dhanisri","Dibang","Dihing","Disang","Kameng","Kapili","Lohit","Manas","Married Scholar","Siang","Subhansiri"];

const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY',]


const UploadedFile = new mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String
})

const messMenuSchema = new mongoose.Schema({
  hostel: { type: String, required: true, enum:hostel, unique:true },
  uploadedFile:UploadedFile,
  menu: [
    {
      day: { type: String, required: true, enum:days,sparse:true },
      breakfast: { type: String, required: true },
      lunch: { type: String, required: true },
      dinner: { type: String, required: true },
    }],
  dateCreated: { type: Date, default: Date.now(), },
});

const messMenuModel = new mongoose.model("MessMenu", messMenuSchema);
module.exports = messMenuModel;
