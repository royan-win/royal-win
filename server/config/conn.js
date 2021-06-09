const mongoose = require("mongoose"); 

const mongoconn=async()=>{
    try{
 mongoose.connect("mongodb+srv://login:h2318c@cluster0.eaqyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true , 
useUnifiedTopology:true , useCreateIndex:true , useFindAndModify:false})
    console.log(`connection is sucessfull`); 
}catch(e){
    console.log(e); 
}
};
module.exports  = mongoconn; 