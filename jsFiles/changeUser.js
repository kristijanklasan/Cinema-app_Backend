
var dbcon = require("../jsFiles/DBconnection")


module.exports ={
    changeUser:function(post_data,response){
        

        const crypto = require('crypto'); 
        var hash = crypto.createHash('sha256').update(post_data.lozinka).digest('base64'); 

        console.log(hash)
        
    
        var sql = 'UPDATE User SET ime = ?, prezime = ?, telefon = ?, email = ?, lozinka = ? WHERE id = ? ';
        
        dbcon.updateUser(sql,post_data,hash,response)
    }
}