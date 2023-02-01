

const mongoose = require('mongoose');

const roleEnums = new mongoose.Schema({value: { type: String, enum:["ADMIN","SUPER_ADMIN","CLUB","HMC"]}});



const clubEnums = ["Aero Club","Anchoring Club",'Aquatic Club',"Astro Club",'Athletics Club',"Auto Club",'Badminton Club',"BasketBall Club","C&A Club","Coding Club","Cricket Club","Dance Club","Drama Club","E-Cell","Elec Club","F&E Club","Fineart Club","Football Club","Hockey Club","Hostel Affair Club","Literary Club","Movie Club","Music Club","Photography Club","Prakriti Club","Quiz Club","Robotic Club",'SAIL',"Squash Club","SWB Club",'SWC',"TT Club","Tennis Club","Volleyball Club","WeightLifting Club",];


const hostel = ["Barak Hostel","Brahmaputra","Dhanisri","Dibang","Dihing","Disang","Kameng","Kapili","Lohit","Manas","Married Scholar","Siang","Subhansiri"];


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    encryptedPassword:{type:String},
    hostel:{type:String,default:"Choose",enum:hostel},
    role:[roleEnums],
    is_banned:{type:Boolean, default:false},
    club:{type:String,enum:clubEnums},
    // token:{type:String,required:true},
    // seckey:{type:String,required:true,default:process.env.JWT_SECRET},
})

const Admin = mongoose.model("Admin",userSchema);
// export default User;
module.exports = Admin;