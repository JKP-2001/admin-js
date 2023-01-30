import mongoose from "mongoose";

const {
  Schema
} = mongoose;

const lastUpdateSchema = new Schema({
  food: Date,
  menu: Date,
  travel: Date,
  contact: Date,
});

const LastUpdate = mongoose.model("last_update", lastUpdateSchema);

export default LastUpdate;