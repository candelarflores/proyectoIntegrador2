let express = require('express');
let router = express.Router();

/* localhost:3000/detalles */
router.get('/detalles', function(req, res) {
  res.send("Página del detalle de la pelicula");
});

module.exports = router;