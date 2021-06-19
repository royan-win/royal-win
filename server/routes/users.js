const express = require("express") ; 
const router = express.Router() ;
const {signin , signup, reset , newpassword , admin , totalcoins, deposit , adminwithdrwal , userdetails ,adminDeposit ,  adminDepositDecline , adminDepositAllow  ,admindetails}  = require("../controllers/users.js"); 
router.post("/signin",signin) ; 
router.post("/signup",signup) ;
router.post("/admin",admin) ; 
router.post("/reset",reset) ;
router.post("/totalcoins",totalcoins) ;
router.patch("/newpassword/:id", newpassword);
router.post("/deposit", deposit);  
router.post("/adminwithdrwal" ,adminwithdrwal) ; 
router.get("/userdetails/:id",userdetails)
router.post("/adminDeposit" ,adminDeposit); 
router.post("/adminDepositAllow" ,adminDepositAllow);
router.post("/adminDepositDecline" , adminDepositDecline);  
router.get("/admindetails" , admindetails)
module.exports = router ;       