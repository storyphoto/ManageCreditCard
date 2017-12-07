var express = require("express");
var router  = express.Router();

 
// Index
router.get("/", function(req, res){

    res.render("home/index", {});
 
});


// kakao_oauth
router.get("/kakao_oauth", function(req, res){
  
      res.redirect("/CreditCardIssuerList");
   
  });
 
module.exports = router;
