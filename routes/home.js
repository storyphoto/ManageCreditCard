var express = require("express");
var router  = express.Router();

 
// Index
router.get("/", function(req, res){

    res.render("home/index", {});
 
});


// Index
router.get("/go_next", function(req, res){
  
      res.redirect("/CreditCardIssuerList");
   
  });
 
module.exports = router;
