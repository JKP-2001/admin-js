const mongoose = require('mongoose');

const SellDetailsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    phonenumber: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    compressedImageURL: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
});

export default mongoose.model("sellItem", SellDetailsSchema);
