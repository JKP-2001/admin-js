const mongoose = require('mongoose');
const validator = require('validator')

// Single file upload, event title, description, date object, club name

const UploadedFile = new mongoose.Schema({
    path: [String],
    type: [String],
    size: [Number],
    folder: [String],
    filename: [String]
})

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        required: true
    },
    updationDate: {
        type: Date,
    },
    uploadedFile: UploadedFile,
    clubName: {
        type: String,
        required: true
    },
    clubType: {
        type: String,
        required: true
    },
    //   fileLocation:{
    //     type:String,
    // },

});

const newsSchema = new mongoose.model("News", eventSchema);
module.exports = newsSchema
// export default newsSchema
