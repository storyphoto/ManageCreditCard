var express  = require("express");
var router   = express.Router();
var Cardissuer  = require("../models/CardIssuer");

// Index
router.get("/", function(req, res){
  Cardissuer.find({}, function(err, cardissuers){
    if(err) return res.json(err);
    res.render("cardissuers/index", {cardissuers:cardissuers});
  });
});

// New
router.get("/new", function(req, res){
  res.render("cardissuers/new");
});

// create
router.post("/", function(req, res){
  Cardissuer.create(req.body, function(err, Cardissuer){
    if(err) return res.json(err);
    res.redirect("/cardissuers");
  });
});

// show
router.get("/:id", function(req, res){
  Cardissuer.findOne({_id:req.params.id}, function(err, Cardissuer){
    if(err) return res.json(err);
    res.render("cardissuers/show", {Cardissuer:Cardissuer});
  });
});

// edit
router.get("/:id/edit", function(req, res){
  Cardissuer.findOne({_id:req.params.id}, function(err, Cardissuer){
    if(err) return res.json(err);
    res.render("cardissuers/edit", {Cardissuer:Cardissuer});
  });
});

// update
router.put("/:id", function(req, res){
  Cardissuer.findOneAndUpdate({_id:req.params.id}, req.body, function(err, cardissuer){
    if(err) return res.json(err);
    res.redirect("/cardissuers/"+req.params.id);
  });
});

// destroy
router.delete("/:id", function(req, res){
  Cardissuer.remove({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect("/cardissuers");
  });
});

module.exports = router;
