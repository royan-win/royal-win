const express= require("express") ;
const app = express() ;  
const cors  =require("cors") ;
const dotenv = require("dotenv");
const conn = require("./config/conn"); 
dotenv.config({  path: "./config.env" });
 const port =  8080 ;

conn() ; 

app.use(express.json({limit:"30mb"  , extended:true}) ) ; 
app.use(express.urlencoded({limit:"30mb"  , extended:true}) ) ; 

app.use(cors()) ; 
app.get("/", (req,res)=>{
    res.send("app is running"); 
})
app.use("/users" , require("./routes/users")) ; 
app.use("/users" , require("./routes/Moneytree")) ; 
app.listen(port , ()=>{
    console.log(`listening at port number ${port}`) ; 
})