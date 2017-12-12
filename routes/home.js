var express = require("express");
var router  = express.Router();
// var request = require("request");
 
// Index
router.get("/", function(req, res){

    res.render("home/index", {});
 
});

// Index


router.get("/test", function(req, res){
    
        res.render("home/test", {});
     
    });

// kakao_oauth
router.get("/kakao_oauth", function(req, res){
  
    var client_id = '30e0b78f1a3746f3f1383f4a972d6331';
    var redirect_url = '/kakao_oauth';

    var url = 'https://kapi.kakao.com/v1/user/me';
    
    var oRequestParam = {
        method: 'POST',
        url: url,
        headers : {"Authorization" : "Bearer V9ICniqd93PWrEcJ-MWoeWrQB6pf-mOksXliLwopdkgAAAFgNTVCoA"}
    };

    var sendData = '';
    request(oRequestParam, function (error, response, body) {
  
        if (!error && response.statusCode == 200) {
            // Print out the response body
               res.send(body);
               res.render('oauth', {body: body});
        } else {
            console.log('error');             
        };
    })
   
  });
 
module.exports = router;
