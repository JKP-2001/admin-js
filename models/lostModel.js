import { Schema, model } from "mongoose";

const lostDetailsSchema = new Schema({
    title: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    location: { type: String, required: true },
    phonenumber: { type: String, required: true },
    description: { type: String, required: true },
    photo_id: { type: String, required: true },
    imageURL: { type: String, required: true },
    compressedImageURL: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
});

export default model("lostItem", lostDetailsSchema);
