let db = require("../database/models")

module.exports = {

    registros: function(req, res){
   
       res.render('registro')
    },

    guardar: function(req, res){
       db.Usuarios.create({
         username: req.body.username,
         email: req.body.email,
         pass: req.body.pswd,
         dateofbirth: req.body.birthdate,

       }),
       res.redirect("/login"); 
    },
   
   }