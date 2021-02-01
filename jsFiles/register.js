var dbcon = require("../jsFiles/DBconnection")

module.exports = {
    register:function(req,res){
        let post_data = req.body; 
        let lozinka = post_data.lozinka; 

        var crypto = require('crypto'); 
        var hash = crypto.createHash('sha256').update(lozinka).digest('base64'); 
        console.log(hash); 

        var insertUser = `INSERT INTO User(ime,prezime,telefon,email,lozinka) VALUES (?, ?, ?, ?, ?)`;

        var checkEmail = "SELECT count(*) AS email FROM User WHERE email = ?";
        dbcon.register(post_data, hash, insertUser, checkEmail,res)
    }
}