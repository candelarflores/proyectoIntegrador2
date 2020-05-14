let express = require('express');
let router = express.Router();

const controller = require('../controllers/generosController')

/* localhost:3000/generos */
router.get('/', controller.generos);

/* localhost:3000/generos/resultados */
router.get('/resultados', controller.generosResultados);

module.exports = router;