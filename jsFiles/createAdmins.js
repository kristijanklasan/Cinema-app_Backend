var dbcon = require("../jsFiles/DBconnection")
var admins = require("../jsFiles/admins")
var crypto = require('crypto'); 

admins = admins.getAdmins()

module.exports = {
    createAdmins: function(){
        admins.forEach(admin => {
            console.log(admin.ime)
            console.log(admin.lozinka)
            admin.lozinka = crypto.createHash('sha256').update(admin.lozinka).digest('base64');
            console.log(admin.lozinka)
        });
        dbcon.createAdmins(admins)
    }


}