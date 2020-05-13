let express = require('express');
let router = express.Router();

/* localhost:3000/buscar */
router.get('/', function(req, res) {
  res.send("Página de búsqueda");
});

/* localhost:3000/buscar/resultados */
router.get('/resultados', function(req, res) {
  res.send("Página de resultados de la busqueda");
});

module.exports = router;