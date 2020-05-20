module.exports = {

    busqueda: function(req, res){

        res.render('buscador')
    },

    resultados: function(req, res){

        res.render('resultadoBusqueda')
    },

    resultadosUsuarios: function(req, res){

        res.render("busquedaUsuario")
    },
  

}