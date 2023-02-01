const messMenuModel = require("../models/messMenu");
const mongoose = require("mongoose")

module.exports.beforeNewMenu = async (request, { currentAdmin }) => {
    request.payload = {
        ...request.payload,
        dateCreated:Date.now(),
    };
    return request;
};


module.exports.afterNewMenu = async (request, { currentAdmin }) => {
    let menu = await messMenuModel.findById(request.payload._id);
    let size = request.uploadedFile.size / (1024*1024);
    const save = await messMenuModel.findByIdAndUpdate(request.payload._id,{size:size}) 
    return request;
};