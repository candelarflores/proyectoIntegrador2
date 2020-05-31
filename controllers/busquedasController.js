let db = require("../database/models")

const OP = db.Sequelize.Op;

module.exports = {

    busqueda: function(req, res){

        res.render('buscador')
    },

    resultados: function(req, res){

        res.render('resultadoBusqueda')
    },

    busquedaUsuarios: function(req, res){

        res.render("busquedaUsuarios")
    },

    resultadosUsuarios: function(req, res){

        let nombreUsuario = req.body.query[0];

        let correo = req.body.query[1]

        if(nombreUsuario == "" && correo == ""){
            return res.render("noResultados")

        } else if(nombreUsuario == "") {
            db.Usuarios
            .findAll({
                where: [
                        {email: {
                            [OP.like]: "%" + correo + "%"}}
                    ]
                })
            .then(function(resultados){
                if(resultados != 0){
                    return res.send(resultados)
                    //return res.render("resultadosUsuarios", {listadoUsuarios:resultados})
                    
                } else {
                    res.render("noResultados")
                }
            })
            .catch(error => {
                return res.send(error)
            });

        } else if(correo == ""){
            db.Usuarios
            .findAll({
                where: [
                    {username: {
                            [OP.like]: "%" + nombreUsuario + "%"}},
                        
                    ]
            })
            .then(function(resultados){
                if(resultados != 0){
                    res.send(resultados)
                    //res.render("resultadosUsuarios", {resultados:resultados})
                } else {
                    res.render("noResultados")
                }
            })
            .catch(error => {
                return res.send(error)
            });

        } else {
            db.Usuarios
            .findAll({
                where: [{
                    [OP.or]: [
                        {username: {
                            [OP.like]: "%" + nombreUsuario + "%"}},
                        {email: {
                            [OP.like]: "%" + correo + "%"}}
                    ]
                }]
            })
            .then(function(resultados){
                if(resultados != 0){
                    res.send(resultados)
                    //res.render("resultadosUsuarios", {resultados:resultados})
                } else {
                    res.render("noResultados")
                }
            })
            .catch(error => {
                return res.send(error)
            });
         }
     },

    detalleUsuarios: function(req, res){

        res.render("detalleUsuarios")
    },
  

}