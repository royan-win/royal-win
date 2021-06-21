const mongoose = require("mongoose");
const HomeSchema = mongoose.Schema({
  image1: {type:String , default:null},
  image2:{type:String , default:null},
  image3:{type:String , default:null},
});
const Homes= mongoose.model("Homes", HomeSchema);
module.exports = Homes; 