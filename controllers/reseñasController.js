const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {

    reseña: function(req, res){
       DB.Reseñas.findAll()
          .then(function(reseñas){
             return  res.render('reseñas', {reseñas:reseñas})
            // res.send(reseñas)
          })
   
       
    }
    
   
   }