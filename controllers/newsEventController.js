const messMenuModel = require("../models/messMenu");
const mongoose = require("mongoose");
const Admin = require("../models/Admin");
const { getClubType } = require("../functions");

module.exports.beforeNewEvent = async (request,{ currentAdmin }) => {
    const _id = currentAdmin._id;
    const user = await Admin.findById(_id);
    if(user){
        const clubName = user.club;
        const clubType = getClubType(clubName);
        request.payload = {
            ...request.payload,
            author:user._id,
            creationDate:Date.now(),
            clubName,
            clubType
        };
    }
    return request;
};


module.exports.afterNewEvent = async (request,response) => {
    request.payload = {
        ...request.payload,
        creationDate:Date.now()
    };
    // console.log({res:request.files});
    // let menu = await messMenuModel.findById(request.record.params._id);
    // if(menu){
    //     const newMenu = await messMenuModel.findByIdAndUpdate(request.record.params._id,{dateCreated:Date.now()});
    // }
    return request;
};


// import { body } from "express-validator";
// import newsSchema from "../models/newsevent.js"
// import User from "../models/User.js";
// import fs from "fs";

// import { getAdmin, getClubType, getDateTime, grpName } from "../functions.js";


// const SUPER_ADMINS = getAdmin();

// const newEvent = async (req, res) => {

//     try {
//         const loginuser = req.user;

//         const user_data = await User.findOne({ email: loginuser.id });

//         if (!user_data) {
//             throw new Error("User Not Found");
//         }

//         const body = req.body;

//         if (!user_data.club.includes(body.clubname)) {
//             throw new Error("Unauthorized Access Detected.");
//         }

//         let clubType = "ADMIN";
//         let clubname = "ADMIN";

//         if (body.clubname !== 'ADMIN') {
//             clubType = getClubType(body.clubname);
//             if (clubType === "") {
//                 throw new Error("Corresponding Club Type Is Not Found");
//             }

//             clubname = grpName(body.clubName)
//         }
//         // console.log({file:req.file})

//         const imagePath = req.file.path;

//         const newevent = await newsSchema.create({
//             title: body.title,
//             author: user_data._id,
//             content: body.content,
//             creationDate: Date.now(),
//             imgURL: imagePath,
//             clubName: clubname,
//             clubType: clubType
//         });

//         res.status(201).json({ success: true, event: newevent });
//         return;


//     } catch (err) {
//         res.status(400).json({ success: false, error: err.toString() });
//     }

// }


// const getEvents = async (req, res) => {
//     try {
//         let page = req.query.page;
//         let clubType = "";
//         let clubname = "";


//         if (req.query.type !== "all") {
//             clubType = getClubType(req.query.type)
//             clubname = grpName(req.query.type);
//         }
//         const toSkip = (page - 1) * 10;
//         const docsCount = await newsSchema.countDocuments();
//         if (toSkip > docsCount) {
//             res.json({ result: false, details: [] });
//             return;
//         }


//         if(req.query.type === "ADMIN"){
//             const news = await newsSchema.find({clubName:"ADMIN"}).sort({ dateCreated: -1 }).skip(toSkip).limit(10);
//             res.json({ result: true, details: news });
//             return; 
//         }

//         if (clubname !== "") {
//             const news = await newsSchema.find({clubName:clubname}).sort({ dateCreated: -1 }).skip(toSkip).limit(10);
//             res.json({ result: true, details: news });
//             return; 
//         }
//         else if(req.query.type === "all"){
//             const news = await newsSchema.find().sort({ dateCreated: -1 }).skip(toSkip).limit(10);
//             res.json({ result: true, details: news });
//             return; 
//         }
//         else{
//             const lostItems = await newsSchema.find({clubType:req.query.type}).sort({ dateCreated: -1 }).skip(toSkip).limit(10);
//             res.json({ result: true, details: lostItems });
//             return;
//         }
//     } catch (e) {
//         res.status(400).json({ success: false, error: e.toString() });
//     }
// }

// const updateEvent = async (req, res) => {
//     try {

//         const loginuser = req.user;
//         const user_data = await User.findOne({ email: loginuser.id });

//         if (!user_data) {
//             throw new Error("User Not Found");
//         }

//         const _id = req.params.id;
//         const item_details = await newsSchema.findById(_id);

//         if (!item_details) {
//             throw new Error("Item Not Found");
//         }

//         if (!user_data.club.includes(item_details.clubName)) {
//             throw new Error("Unauthorized Access Detected.");
//         }



//         if (String(item_details.author) !== String(user_data._id)) {               // If Item found but doesn't belongs to the logged in user.
//             throw new Error("This Item Doesn't Belongs This You.");
//         }

//         const title = req.body.title ? req.body.title : item_details.title;
//         const content = req.body.content ? req.body.content : item_details.content;

//         const img_path = req.file ? req.file.path : item_details.imgURL;
//         // console.log(item_details.imgURL.split("\\"));
//         // console.log(req.file);

//         if (img_path !== item_details.imgURL) {
//             fs.unlinkSync(item_details.imgURL);
//         }

//         const result = getDateTime();

//         const getevent = await newsSchema.findByIdAndUpdate(_id, {
//             title: title,
//             content: content,
//             updationDate: Date.now(),
//             imgURL: img_path
//         });
//         res.json({ success: true, event: getevent });
//         return;

//     } catch (err) {
//         res.status(400).json({ success: false, error: err.toString() });
//     }
// }

// const deleteEvent = async (req, res) => {

//     try {

//         const loginuser = req.user;
//         const user_data = await User.findOne({ email: loginuser.id });

//         const _id = req.params.id;
//         const item_details = await newsSchema.findById(_id);

//         if (!item_details) {
//             throw new Error("Item Not Found");
//         }

//         if (!user_data.club.includes(item_details.clubName)) {
//             console.log(user_data.club);
//             console.log(item_details.clubName)
//             throw new Error("Unauthorized Access Detected.");
//         }


//         if (String(item_details.author) !== String(user_data._id)) {               // If Item found but doesn't belongs to the logged in user.
//             throw new Error("This Item Doesn't Belongs This You.");
//         }
//         else {
//             fs.unlinkSync(item_details.imgURL);
//             const getevent = await newsSchema.findByIdAndDelete(req.params.id);
//             res.json({ success: true, event: getevent });
//         }
//     } catch (err) {
//         res.status(400).json({ success: false, error: err.toString() });
//     }
// }


// export { newEvent, getEvents, updateEvent, deleteEvent };
