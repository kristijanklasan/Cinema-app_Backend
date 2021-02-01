
const mysql = require("mysql")
const { debug } = require("request")
var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "KnV19OC0YF",
  password: "TaiKwEQOCL",
  port: "3306",
  database: "KnV19OC0YF"

})

module.exports = {
  checkEmailAndPassword: function (checkEmail,password, response){
    con.query(checkEmail, (err, res)=>{
      if (err) throw err
      if(res.length>0 ){
        var isAdmin=false;
        console.log(res)
        console.log(res[0].lozinka)
        console.log(password)
        console.log(res[0].potvrda)
        if(res[0].lozinka == password){
          if(res[0].potvrda== "da"){
            isAdmin=true;
          }
          response.send({emailRes:true,passwordRes:true,isAdmin:isAdmin})
        }else{
          response.send({emailRes:true,passwordRes:false,isAdmin:isAdmin})
        }
      }
      else{
        response.send({emailRes:false,passwordRes:false,isAdmin:isAdmin})
        
      }
    })
  },


  createAdmins:function(admins){
    admins.forEach(admin => {
      var checkIfEmailExists = `select * from User where email ="${admin.email}"`
      var insertAdmin= `insert into User (ime,prezime,telefon,email,lozinka,potvrda)
                        values ("${admin.ime}",
                        "${admin.prezime}",
                        "${admin.telefon}",
                        "${admin.email}",
                        "${admin.lozinka}",
                        "${admin.potvrda}")`
      console.log(insertAdmin)
      con.query(checkIfEmailExists,(err,res)=>{
        if(err) throw err;
        if(res.length>0){
          console.log("email "+admin.email+" alredy exists")
        }else{
          con.query(insertAdmin, (err,res)=>{
            if(err) throw err
            console.log(admin.email + "   inserted")
          })
        }
      })
    });
  },


  insertTables:function(tables){
    tables.forEach(table=>{
      con.query(table, function(err,res){
        if(err) console.log(err);
    
        console.log("created table if not exists");
      })
    })
  },


  register:function(post_data, hash, insertUser, checkEmail,res){
        
    con.query(checkEmail,[post_data.email],(err,res)=>{
      if(err) throw err;
      if(res.length>0){
        res.json("Korisnik već postoji!");
      }else{
        con.query(insertUser,[post_data.ime,post_data.prezime,post_data.telefon,post_data.email,hash], (err,res) =>{
          if(err){
              throw err;
            }
            console.log(true)
            res.send(true);
          
        })
        }
    })
  }

}
  

