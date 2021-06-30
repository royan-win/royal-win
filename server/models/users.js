const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  Real_name: { type: String, required:  true },
  email:{type:String , required:true},
  phone_number:{type:Number , required:true},
  bank_acc: {type:Number , required:true},
  ifsc:{type:String , required:true},
  coins:
  {type:Number,
  default:0},
  deposit_count:{type:Number ,required:true,default:0}, 
  password: { type: String, required: true },
  id: {type: String }, 
  deposit :{
    coins_deposit:{type:Number},
    name:{type:String} , 
    deposited_on:{type:Date}, 
    default:{}, 
},
withdrwal:{
  coins_withdrwal:{type:Number}, 
  withdrwal_on:{type:Date}, 
  default:{}, 
}
});

const users= mongoose.model("User", userSchema);
module.exports = users ; 