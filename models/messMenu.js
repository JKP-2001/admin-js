import mongoose, { Schema } from "mongoose";

const messMenuSchema = new Schema({
  hostel: { type: String, required: true, },
  menu: [
    {
      day: { type: String, required: true },
      breakfast: { type: String, required: true },
      lunch: { type: String, required: true },
      dinner: { type: String, required: true },
    }],
  dateCreated: { type: Date, default: Date.now(), },
});

const messMenuModel = new mongoose.model("MessMenu", messMenuSchema);
export default messMenuModel;
