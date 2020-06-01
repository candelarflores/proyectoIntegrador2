let db = require("../database/models");
const moduloLogin = require("../modulo-login");
module.exports = {

 detalles: function(req, res){

   res.render('detalle', {
      serieId: req.query.serieId
   })
},
create: function(req, res) {
  moduloLogin.validar(req.body.email, req.body.pwd)
  .then(function(usuario) {
     if(usuario != undefined) {
        db.Reseñas.create({
           movie_id: req.body.serieId,
           user_id: usuario.id,
           content: req.body.text,
           rating: req.body.star
        })
        .then(function(resultado) {
           res.redirect("/detalle")
        })
     } else {
        res.redirect("/registro")
     }
  })
},
}