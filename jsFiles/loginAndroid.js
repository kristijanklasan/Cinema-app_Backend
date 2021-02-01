

var dbcon = require("../jsFiles/DBconnection")

module.exports = {
    androidLogin:function(req,res){

        let post_data = req.body; 


        var crypto = require('crypto'); 
        var hash = crypto.createHash('sha256').update(post_data.lozinka).digest('base64'); 
        console.log(hash); 
        var findUser = "SELECT * FROM User WHERE email = ? AND lozinka = ?";

        dbcon.androidLogin(post_data, hash, findUser,res)
    }
}