//let db = require("../database/models")

module.exports = {

    registros: function(req, res){
   
       res.render('registro')
    },

    guardar: function(req, res){
       db.Usuarios.create({
         name: req.body.username,
         email: req.body.email,
         password: req.body.pswd,
         born_date: req.body.birthdate,

       }),
       res.redirect("/login"); 
    },
   
   }