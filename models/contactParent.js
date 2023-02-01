const mongoose = require("mongoose")
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const { Schema } = mongoose;

// import contactsSubsection from "../models/contactsSubsection.js";
const contactsSubsection = require("../models/contactsSubsection.js")

const contactParentSchema = new Schema({
  name: String,
  // group: String,
  contacts: [contactsSubsection.schema],
});

const contactParent = mongoose.model("contactParent", contactParentSchema);

module.exports =  contactParent;
