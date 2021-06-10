const express = require("express") ; 
const router = express.Router() ;
const {history}  = require("../controllers/Moneytree.js"); 
router.post("/",history) ;
module.exports = router ;        