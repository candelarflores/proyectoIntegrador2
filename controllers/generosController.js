module.exports = {
 
    generos: function(req, res){

     res.render('seriesGenres')

    },

    generosResultados: function(req, res){

        res.render('seriesByGenre')
    }


}