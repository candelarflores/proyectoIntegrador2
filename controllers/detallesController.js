let db = require("../database/models");
const moduloLogin = require("../modulo-login");
const OP = db.Sequelize.Op;
module.exports = {

 detalles: function(req, res){
   db.Reseñas.findAll({
      where: [
              {movie_id: {
                  [OP.like]: "%" + req.query.serieId + "%"}}
      ],
      include: ['Usuarios']
      })
   .then(function(resultados){
      res.render("detalle", {
         serieId: req.query.serieId,
         resultados: resultados
      }) 
      //res.send(resultados)
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
           res.redirect("/detalles?serieId=" + resultado.movie_id)
           //res.send(req.body)
        })
     } else {
        res.redirect("/registros")
     }
  })
},
}