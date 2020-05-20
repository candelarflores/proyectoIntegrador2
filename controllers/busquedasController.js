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

        res.render("resultadosUsuarios")
    },

    detalleUsuarios: function(req, res){

        res.render("detalleUsuarios")
    },
  

}