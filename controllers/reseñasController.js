const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require('../modulo-login');

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
   
       //<%=resultado.content%>
    },

     edicion: function(req, res){ 
      res.render('reseñasEdit', {id: req.params.id})
  
      },
    

    editar: function(req, res){
      moduloLogin.validar(req.body.email, req.body.pswd)
         .then(function(resultado) {
             if(resultado != undefined){
              DB.Reseñas.update({
                content: req.body.text,
                rating: req.body.star,
        
              }, {
                where: {
                  id: req.body.serieId,
                }
              })
              .then(function(){
                res.redirect('/resenias/' + resultado.id);
              })

             } else {
               return res.redirect('/resenias/edit/' + req.params.id);
             }
           
         });
      
    },
    
    delete: function(req, res) {
      res.render('reseñasDelete', {id:req.params.id})
      
    },

    borrar: function(req, res){
       moduloLogin.validar(req.body.email, req.body.pswd)
        .then(function(resultado){
          if(resultado != null){
            DB.Reseñas.destroy({
              where: {
                id: req.body.idResenia
              }
              
            })
            res.redirect('/resenias/' + resultado.id);
          } else{
            res.redirect('/resenias/delete/' + req.params.id)
          }
        })

    },

    editarr: function(req, res){
      DB.Reseñas.findOne({where: [
        {id: req.params.id}
      ]

      })
      .then(function(resultado){
        res.render('reseñasEdit', {resultado: resultado })
      })
    },

  
  
    
    
   

   }