let db = require("../database/models")
const bcrypt = require("bcryptjs")


module.exports = {

    registros: function(req, res){
   
       res.render('registro')
    },

    guardar: function(req, res){
       db.Usuarios.create({
         username: req.body.username,
         email: req.body.email,
         pass: bcrypt.hashSync(req.body.pswd, 10),
         dateofbirth: req.body.birthdate,

    }),
       res.redirect("/login"); 
    },
   
   }