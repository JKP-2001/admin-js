const {TravelPostModel, TravelChatModel, ReplyPostModel} = require("../models/campusTravelModel");

const mongoose = require("mongoose")



module.exports.beforeNewTravel = async (request, { currentAdmin }) => {
    
    request.payload = {
        ...request.payload,
        dateCreated:Date.now(),
        email:currentAdmin.email,
        name:currentAdmin.name
    };
    return request;
};

module.exports.afterNewTravel = async (request, { currentAdmin }) => {
    
        
    let newChat = await TravelChatModel.create({
        postId:request.record.id
    })
    const updatePost = await TravelPostModel.findByIdAndUpdate(request.record.id, {chatId:newChat._id});    
    return request;
};


module.exports.beforeDelEvent = async (request, { currentAdmin }) => {

    const chat = await TravelChatModel.findOneAndDelete({postId:request.params.recordId});
    return request;
}

// module.exports.afterNewMenu = async (request, { currentAdmin }) => {
//     let menu = await messMenuModel.findById(request.payload._id);
//     let size = request.uploadedFile.size / (1024*1024);
//     const save = await messMenuModel.findByIdAndUpdate(request.payload._id,{size:size}) 
//     return request;
// };