let express = require('express');
let router = express.Router();
const controller = require('../controllers/busquedasController')

/* localhost:3000/buscar */
router.get('/', controller.busqueda);

/* localhost:3000/buscar/resultados */
router.get('/resultados', controller.resultados);

/* localhost:3000/buscar/busqueda_usuarios */
router.get('/busqueda_usuarios', controller.busquedaUsuarios);


router.post('/busqueda_usuarios/resultadosUsuarios', controller.resultadosUsuarios);

/* localhost:3000/buscar/busqueda_usuarios/resultadosUsuarios/detalle */
router.get('/busqueda_usuarios/resultadosUsuarios/detalle', controller.detalleUsuarios);

module.exports = router;