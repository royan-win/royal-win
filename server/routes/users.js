const express = require("express") ; 
const router = express.Router() ;
const {signin , signup, reset , newpassword , admin , totalcoins, deposit , adminwithdrwal , userdetails}  = require("../controllers/users.js"); 
router.post("/signin",signin) ; 
router.post("/signup",signup) ;
router.post("/admin",admin) ; 
router.post("/reset",reset) ;
router.post("/totalcoins",totalcoins) ;
router.patch("/newpassword/:id", newpassword);
router.post("/deposit", deposit);  
router.post("/adminwithdrwal" , adminwithdrwal) ; 
router.get("/userdetails/:id", userdetails)
module.exports = router ;       