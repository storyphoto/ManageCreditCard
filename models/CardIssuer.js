var mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
  issuer:{type:String, required:true, unique:true},
  amount:{type:String},
  period:{type:String},
  remark:{type:String}
});

var CardIssuer = mongoose.model("CardIssuer", contactSchema);

module.exports = CardIssuer;
