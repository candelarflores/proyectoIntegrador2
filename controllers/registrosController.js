module.exports = {

    registros: function(req, res){
   
       res.render('registro')
    },

    create: function(req, res){
       let usuario = {
          nombre: req.body.username,
          email: req.body.email,
          contraseña: req.body.pswd,
          birthdate: req.body.birthdate,
       }
       res.redirect("/login");
    },
   
   }