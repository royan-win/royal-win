const express = require("express") ; 
const router = express.Router() ;
const {signin , signup, reset , newpassword}  = require("../controllers/users.js"); 
router.post("/signin",signin) ; 
router.post("/signup",signup) ; 
router.post("/reset",reset) ;
router.patch("/newpassword/:id", newpassword); 
module.exports = router ;       