const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {

    reseña: function(req, res){
       DB.Reseñas.findAll({
         where:[
           {user_id: req.params.id}
         ],
         include: ['Usuarios']
       })
          .then(function(reseñas){
              res.render('reseñas', {reseñas:reseñas})
            // res.send(reseñas)
          })
   
       
    }
    
   
   }