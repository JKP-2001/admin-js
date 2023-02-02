const mongoose = require("mongoose");

const travelEnums = ['Campus','Airport','RailwayStation'];

const TravelPostSchema = new mongoose.Schema({
    "email": { type: String, required: true },
    "name": { type: String, required: true },
    "travelDateTime": { type: Date, required: true },
    "to": { type: String, required: true, enum:travelEnums},
    "from": { type: String, required: true, enum:travelEnums},
    "margin": { type: Number, required: true },
    "note": { type: String, required: true },
    "phonenumber": { type: String },
    "chatId": { type: String }
});

const ReplyPostSchema = new mongoose.Schema({
    "name": { type: String, required: true },
    "message": { type: String, required: true },
    "email": { type: String, required: true }
});

const ChatSchema = new mongoose.Schema({
    "replies": [ReplyPostSchema],
    "postId":{ type: String}
});


const TravelPostModel = mongoose.model("TravelPost", TravelPostSchema);
const TravelChatModel = mongoose.model("TravelChat", ChatSchema);
const ReplyPostModel = mongoose.model("TravelChatReply", ReplyPostSchema);

module.exports = {TravelPostModel, TravelChatModel, ReplyPostModel};