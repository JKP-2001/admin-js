const messMenuModel = require("../models/messMenu");
const mongoose = require("mongoose");
const { getUserRole } = require("../functions");

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


module.exports.beforeMenuListing = async (request, context) => {
    const { currentAdmin } = context
    const arr = getUserRole(currentAdmin.role);
    if (!arr.includes('SUPER_ADMIN')) {
        return {
            ...request,
            query: {
                ...request.query,
                'filters.hostel': currentAdmin.hostel ? currentAdmin.hostel : ''
            }
        }
    }
    return request
}