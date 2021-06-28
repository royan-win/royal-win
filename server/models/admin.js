const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
username:{type:String , required:true},
password:{type:String , required:true} ,
withdrwal :{
    coins_withdrwal:{type:String},
    withdrwal:{type:String} , 
    withdrwal_on:{type:Date},
    withdrawer_id:{type:String}, 
    default:{}, 
}, 
deposit :{
    deposit_Amount:{type:Number},
    depositer_id:{type:String},
    deposit_by:{type:String} , 
    deposit_on:{type:Date},
    depositer_screenshot:{type:String}, 
    default:{}, 
}, 
});

const Admins= mongoose.model("Admins", adminSchema);
module.exports = Admins ; 