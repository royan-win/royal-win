const mongoose = require("mongoose");
const historySchema = mongoose.Schema({
  dice1: { type:Number},
  dice2: { type:Number},
  dice3: { type:Number},
  Sum: { type:Number},
  id: { type: String }, 
});

const history= mongoose.model("history", historySchema);
module.exports = history ; 