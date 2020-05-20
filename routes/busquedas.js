let express = require('express');
let router = express.Router();
const controller = require('../controllers/busquedasController')

/* localhost:3000/buscar */
router.get('/', controller.busqueda);

/* localhost:3000/buscar/resultados */
router.get('/resultados', controller.resultados);

/* localhost:3000/buscar/resultados_usuarios */
router.get('/resultados_usuarios', controller.resultadosUsuarios);

module.exports = router;