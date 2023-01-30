import { Schema, model } from "mongoose";

const BuyDetailsSchema = new Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    phonenumber: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    compressedImageURL: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
});

export default model("buyItem", BuyDetailsSchema);
