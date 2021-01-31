

var admins = [{
    ime:"admin1",
    prezime:"admin1",
    email:"admin1@email.com",
    telefon:667554,
    potvrda:"da",
    lozinka:"admin1"
},{
    ime:"admin2",
    prezime:"admin2",
    email:"admin2@email.com",
    telefon:777666,
    potvrda:"da",
    lozinka:"admin2"
},{
    ime:"admin3",
    prezime:"admin3",
    email:"admin3@email.com",
    telefon:777666,
    potvrda:"da",
    lozinka:"admin3"
}]

module.exports={
    getAdmins: function(){
        return admins
    }
}