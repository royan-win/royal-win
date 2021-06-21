const bcrypt = require("bcryptjs") ; 
const jwt = require("jsonwebtoken") ; 
const UserModal = require("../models/users") ; 
const AdminModal = require("../models/admin");
const HomePageModal = require("../models/Homepage");  
var nodemailer = require('nodemailer');
const { db } = require("../models/users");
var transporter = nodemailer.createTransport(({
  service:"sendinblue",
  auth:{
    user :"ishankgoel811@gmail.com",
    pass: "p5cy0JAaxU9mZ34S",
  }
})) 
const signin = async(req,res)=>{
  console.log(req.body); 
     const { phone_number, password } = req.body;

    try {
      const oldUser = await UserModal.findOne({ phone_number });
  
      if (!oldUser) return res.status(404).json({ message: "Invalid credentials" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
       console.log(isPasswordCorrect); 
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: oldUser.phone_number, id: oldUser._id }, "test", { expiresIn: "1h" });
      console.log(token) ; 

      res.status(200).json({ result: oldUser, token });

    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
}
const signup = async(req,res)=>{
     const {email,phone_number , Real_name, bank_acc , ifsc , password, confirmpassword } = req.body;
     console.log(req.body) ; 
    try {
      
      const oldUser = await UserModal.findOne({ $or: [ { phone_number }, {email } , {bank_acc}, {ifsc}  ] });
      console.log(oldUser) ; 
      if (oldUser) return res.status(400).json({ message: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 12);
      if(confirmpassword !=password){
        return res.status(400).json({ message: "password does not match" });
      }
    if(confirmpassword ==password && oldUser==null){
      const result = await UserModal.create({email,phone_number, password: hashedPassword, Real_name , bank_acc , ifsc   });
    console.log(result); 
      const token = jwt.sign( { email: result.phone_number, id: result._id }, "test" );
    
      res.status(201).json({ result, token });
    
     }
     } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  
}
const reset = async(req,res)=>{
  const {email} = (req.body); 
  console.log(email); 
  try{
  const oldUser = await UserModal.findOne({email});
  const id = oldUser._id
  console.log(oldUser);
  console.log(id);
  if (!oldUser) return res.status(400).json({ message: "Invalid credentials" }); 
if(oldUser){
    transporter.sendMail({
      to:email,
      from: "ishankgoel811@gmail.com",
      subject:"Reset password",
      html:`<h1>To reset pasword <a href="http://localhost:3000/newpassword/${id}">click here</h1>`,
    })
}
res.status(200).json({ message: "Email Sent " });
}
  catch(err){
    res.status(500).json({ message: "Invalid user" });
  }
}

const newpassword = async(req,res)=>{
const {password,confirmpassword} = req.body; 
const { id } = req.params;
const hashedPassword = await bcrypt.hash(password, 12);
try{
  if(password===confirmpassword){
  const updatedPass = {password:hashedPassword};
  console.log(updatedPass); 
  await UserModal.findByIdAndUpdate(id, updatedPass, { new: true });
  res.json(updatedPass); 
  }
else{
  res.status(400).json({ message: "password does not match" });
}
}
catch(err){
   res.status(400).json({ message: "password does not match" });
  console.log(err); 
}
}

const admin = async(req,res)=>{
const {username,password} = req.body ; 
try{
 const oldUser = await AdminModal.findOne( { $and: [ { username:username }, {password:password} ] } )
console.log(oldUser) ;  
if(oldUser){
var userdetails = await UserModal.find(); 
}
const token = jwt.sign({ username: oldUser.username, id: oldUser._id }, "test",);
console.log(token) ; 
res.status(200).json({ result: oldUser, token , userdetails });
}catch(err){
  res.status(400).json({ message: "invalid credentials" });
  console.log(err); 
}
}

const totalcoins = async(req,res)=>{
  console.log(req.body); 
  const {totalcoins, userid} = req.body ; 
  let olduser ; 
  try{
    olduser = await UserModal.findById(userid);
    
    (olduser.coins = totalcoins)
    await olduser.save(); 
  
    res.status(201).json({result:olduser});

  }catch(err){
    res.status(201).json({ message: "something went wrong" });
    console.log(err);
    }
}
const deposit = async (req, res) => {
const {id} = req.body; 
console.log(req.body); 
  try {
    const depositdata = {
      coins_deposit: req.body.deposit,
      name: req.body.name,
      deposited_on:new Date().toISOString()
    };
      const depositedcoins = await UserModal.findByIdAndUpdate(
      id,
      { $push: { deposit:depositdata} },
      { new: true }
    );

    console.log(depositedcoins); 
   
   }
  catch(err){
    console.log(err); 
     res.status(201).json({ message: "something went wrong" });
  }
};
const  adminwithdrwal = async(req,res)=>{
  console.log(req.body) ; 
  const id = "60c4a58ba4472a617063ad63"
try{
  const withdrawtdata = {
    coins_withdrwal:req.body.withdrwal,
    withdrwal:req.body.name,
    withdrwal_on:new Date().toISOString()
  };
   const withdrawcoins = await AdminModal.findByIdAndUpdate(
      id,
    { $push: { withdrwal:withdrawtdata} },
    { new: true }
  );
  console.log(withdrawcoins); 
}
catch(err){
  console.log(err)  ;
}
}


const  adminDeposit = async(req,res)=>{
  console.log(req.body) ; 
  const id = "60c4a58ba4472a617063ad63"
  
try{
  const deposit = {
    deposit_Amount:req.body.formdata?.amount,
    deposit_by:req.body.formdata?.name,
    depositer_phone_no:req.body.formdata?.phone_no , 
    depostier_email:req.body.formdata?.email,
    depositer_id:req.body.id, 
    depositer_screenshot:req?.body?.image, 
    deposit_on:new Date().toISOString()
  };
   const depositcoins = await AdminModal.findByIdAndUpdate(
      id,
    { $push: { deposit:deposit}},
    { new: true }
  );
  console.log(depositcoins); 
}
catch(err){
  console.log(err)  ;
}
}



const userdetails = async(req,res)=>{
  console.log(req.params) ;   
  const {id} = req.params ; 
  try{
const result =  await UserModal.findById(id) ; 
console.log(result); 
res.status(201).json({result:result});
  }
  catch(err){
    console.log(err); 
  }
}
const adminDepositDecline = async(req,res)=>{
  // console.log(req.body) ; 
  const {id} = req.body  ;
  const _id = "60c4a58ba4472a617063ad63"
try{
  const olduser = UserModal.findById(id);
   console.log(id)
  const pullingout=await AdminModal.findByIdAndUpdate(
    _id,
  { $pull: {deposit:{depositer_id:id}}},
  { new: true }
  )
  console.log(pullingout); 
}catch(err){
  console.log(err) ; 
}
}
const adminDepositAllow = async(req,res)=>{
  console.log(req.body) ; 
  const {id , totalcoins} = req.body  ;
  const _id = "60c4a58ba4472a617063ad63"
try{
  const olduser = await UserModal.findById(id);
  olduser.coins = olduser.coins+totalcoins; 
  await olduser.save();
  const pullingout=await AdminModal.findByIdAndUpdate(
    _id,
  { $pull: {deposit:{depositer_id:id}}},
  { new: true }
  )
  console.log(pullingout);

}catch(err){
  console.log(err) ; 
}
}
const admindetails = async(req,res)=>{
  console.log("hello"); 
  try{
    console.log("hello"); 
    const id = "60c4a58ba4472a617063ad63"
    const result  = await AdminModal.findById(id); 
    res.status(201).json({result:result});
    console.log(result);
  }catch(err){
console.log(err); 
  }
}

const homepage = async(req,res)=>{
  console.log(req.body) 
  const id= "60d0768a07faca22b4ede368"
  try{
    console.log(req.body.image1, req.body.image2 , req.body.image3)
  const homepageimage = await HomePageModal.findOne() ;  
 const result =  await HomePageModal.findByIdAndUpdate(id,{
   image1:req.body.image1===undefined ?homepageimage.image1:req.body.image1,
   image2:req.body.image2===undefined ?homepageimage.image2:req.body.image2,
   image3:req.body.image3===undefined ?homepageimage.image3:req.body.image3,},
    { new: true });
  console.log(result); 
  }catch(err){
    console.log(err) ; 
  }
}

const gethomepageimage = async(req,res)=>{
  try{
    const result = await HomePageModal.findOne() ; 
    console.log(result)  ;
    res.status(201).json(result);
  }catch(err){
    console.log(err); 
  }
}
module.exports ={signin , signup , reset ,newpassword , admin , totalcoins , deposit , adminwithdrwal , userdetails, adminDeposit , adminDepositAllow ,  adminDepositDecline , admindetails ,homepage , 
  gethomepageimage} ; 