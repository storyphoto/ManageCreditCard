var express = require("express");
var router  = express.Router();

// Home
router.get("/", function(req, res){
  res.redirect("/CreditCardIssuerList");
});

module.exports = router;
