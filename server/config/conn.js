const mongoose = require("mongoose"); 

const mongoconn=async()=>{
    try{
 mongoose.connect("mongodb+srv://wagerking:Suyash123@cluster0.ax8mu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true , 
useUnifiedTopology:true , useCreateIndex:true , useFindAndModify:false})
    console.log(`connection is sucessfull`); 
}catch(e){
    console.log(e); 
}
};
module.exports  = mongoconn; 