

const mongoose = require('mongoose');

const roleEnums = new mongoose.Schema({value: { type: String, enum:["ADMIN","SUPER_ADMIN","CLUB","HMC"]}});



const clubEnums = new mongoose.Schema({value: { type: String, enum:["ADMIN","SUPER_ADMIN","CLUB","HMC"]}});


const hostel = ["Barak Hostel","Brahmaputra","Dhanisri","Dibang","Dihing","Disang","Kameng","Kapili","Lohit","Manas","Married Scholar","Siang","Subhansiri"];


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    encryptedPassword:{type:String},
    hostel:{type:String,default:"Choose",enum:hostel},
    role:[roleEnums],
    is_banned:{type:Boolean, default:false},
    club:[{type:String}],
    // token:{type:String,required:true},
    // seckey:{type:String,required:true,default:process.env.JWT_SECRET},
})

const Admin = mongoose.model("Admin",userSchema);
// export default User;
module.exports = Admin;