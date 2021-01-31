var dbcon = require("../jsFiles/DBconnection")

module.exports = {
    login: function(req,res){
        
        let loginInfo = req.query;
        var crypto = require('crypto'); 
        var hash = crypto.createHash('sha256').update(loginInfo.lozinka).digest('base64');
        console.log(loginInfo);
        console.log(hash)
        var checkEmail = `select * from User where email="${loginInfo.email}"`
        dbcon.checkEmailAndPassword(checkEmail,hash,res)
        
    }
}