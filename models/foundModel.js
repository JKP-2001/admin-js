import { Schema, model } from "mongoose";

const foundDetailsSchema = new Schema({
    title: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    location: { type: String, required: true },
    submittedat: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    compressedImageURL: { type: String, required: true },
    photo_id: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    claimed: { type: Boolean, default: false },
    claimerEmail: { type: String, default: "none" },
    claimerName: { type: String, default: "none" },
});

export default model("foundItem", foundDetailsSchema);
