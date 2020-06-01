let DB = require("../database/models");
let moduloLogin = require('../modulo-login');




module.exports = {
 
    login: function(req, res){

        res.render('login')
    },

    validar: function(req, res){

        moduloLogin.validar(req.body.email, req.body.pswd)
        .then(resultado=> {

            if(resultado) {res.render('reseñas')
        }else{

            res.render('login')
        }
        })
 }
  }

