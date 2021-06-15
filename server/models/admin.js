const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
username:{type:String , required:true},
password:{type:String , required:true} ,
withdrwal :{
    coins_withdrwal:{type:String},
    withdrwal:{type:String} , 
    withdrwal_on:{type:Date},
    default:{}, 
},  
});

const Admins= mongoose.model("Admins", adminSchema);
module.exports = Admins ; 