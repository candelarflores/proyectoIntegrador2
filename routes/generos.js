let express = require('express');
let router = express.Router();

/* localhost:3000/generos */
router.get('/', function(req, res) {
  res.send("Página de géneros");
});

/* localhost:3000/generos/resultados */
router.get('/resultados', function(req, res) {
  res.send("Página de resultados por género");
});

module.exports = router;