const messMenuModel = require("../models/messMenu");
const mongoose = require("mongoose")

module.exports.beforeNewMenu = async (request, { currentAdmin }) => {
    request.payload = {
        ...request.payload,
    };
    return request;
};


module.exports.afterNewMenu = async (request, { currentAdmin }) => {
    request.payload = {
        ...request.payload,
    };

    let menu = await messMenuModel.findById(request.record.params._id);
    if(menu){
        const newMenu = await messMenuModel.findByIdAndUpdate(request.record.params._id,{dateCreated:Date.now()});
    }
    return request;
};