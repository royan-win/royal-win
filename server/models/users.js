const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  Real_name: { type: String, required:  true },
  email:{type:String , required:true},
  phone_number:{type:Number , required:true},
  bank_acc: {type:Number , required:true},
  ifsc:{type:String , required:true},
  password: { type: String, required: true },
  id: { type: String }, 
});

const users= mongoose.model("User", userSchema);
module.exports = users ; 