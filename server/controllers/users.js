const bcrypt = require("bcryptjs") ; 
const jwt = require("jsonwebtoken") ; 
const UserModal = require("../models/users") ; 
var nodemailer = require('nodemailer');
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
      
      const oldUser = await UserModal.findOne({ $and: [ { phone_number }, {email } ] });
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

module.exports ={signin , signup , reset ,newpassword} ; 