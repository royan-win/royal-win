const express = require("express") ; 
const router = express.Router() ;
const {signin , signup, reset , newpassword , admin , totalcoins, deposit , adminwithdrwal , userdetails ,adminDeposit ,  adminDepositDecline , adminDepositAllow  ,admindetails , homepage , 
    gethomepageimage  ,allowadminwithdrwal  ,declineadminwithdrwal
}  = require("../controllers/users.js"); 
const auth = require("../middleware/auth") ; 
router.post("/signin",signin) ; 
router.post("/signup",signup) ;
router.post("/admin",admin) ; 
router.post("/reset",reset) ;
router.post("/totalcoins",totalcoins);
router.patch("/newpassword/:id", newpassword);
router.post("/deposit", deposit);  
router.post("/adminwithdrwal" ,adminwithdrwal) ; 
router.get("/userdetails/:id",userdetails)
router.post("/adminDeposit" ,adminDeposit); 
router.post("/adminDepositAllow" ,auth,adminDepositAllow);
router.post("/adminDepositDecline" ,auth, adminDepositDecline);  
router.get("/admindetails" , admindetails)  
router.post("/homepage",auth,homepage) ; 
router.get("/gethomepageimage",gethomepageimage) ; 
router.post("/allowadminwithdrwal"  ,allowadminwithdrwal)
router.post("/declineadminwithdrwal" ,declineadminwithdrwal) ; 
module.exports = router ;       