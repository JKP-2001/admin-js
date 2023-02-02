const mongoose = require('mongoose');
const validator = require('validator')

// Single file upload, event title, description, date object, club name

const clubEnums = ["Aero Club","Anchoring Club",'Aquatic Club',"Astro Club",'Athletics Club',"Auto Club",'Badminton Club',"BasketBall Club","C&A Club","Coding Club","Cricket Club","Dance Club","Drama Club","E-Cell","Elec Club","F&E Club","Fineart Club","Football Club","Hockey Club","Hostel Affair Club","Literary Club","Movie Club","Music Club","Photography Club","Prakriti Club","Quiz Club","Robotic Club",'SAIL',"Squash Club","SWB Club",'SWC',"TT Club","Tennis Club","Volleyball Club","WeightLifting Club",];

const clubTypeNums = ['technical','sports','cultural','welfare'];


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
    clubName: {
        type: String,
        required: true,
        enum: clubEnums
    },
    clubType: {
        type: String,
        required: true,
        enum:clubTypeNums
    },
    uploadedFile: UploadedFile,
    //   fileLocation:{
    //     type:String,
    // },

});

const newsSchema = new mongoose.model("News", eventSchema);
module.exports = newsSchema
// export default newsSchema
