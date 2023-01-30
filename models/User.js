

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    hostel:{type:String,default:"Choose"},
    role:[{type:String,default:[]}],
    token:{type:String,required:true},
    seckey:{type:String,required:true,default:process.env.JWT_SECRET},
    is_banned:{type:Boolean, default:false},
    club:[{type:String}],
})

const User = mongoose.model("User",userSchema);
// export default User;
module.exports = User;